import HeroBannerCard from '@components/hero/hero-banner-card';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from '@components/ui/carousel/slider';
import {onlyForBuilder, IsEditable} from "@components/config";

interface Props {
	heroBanner?: any;
	className?: string;
	contentClassName?: string;
	heroContent?: boolean;
}

const defaultSlider = [
	{
		id: 1,
		title: 'Free delivery from your store',
		slug: '/search',
		image: {
			mobile: {
				url: '/assets/images/banner/home3/bannerHeroSlider_1.png',
				width: 540,
				height: 220,
			},
			desktop: {
				url: '/assets/images/banner/home3/bannerHeroSlider_1.png',
				width: 540,
				height: 220,
			},
		},
	},
	{
		id: 2,
		title: 'Fresh Healthy Breakfast food',
		slug: '/search',
		image: {
			mobile: {
				url: '/assets/images/banner/home3/bannerHeroSlider_2.png',
				width: 540,
				height: 220,
			},
			desktop: {
				url: '/assets/images/banner/home3/bannerHeroSlider_2.png',
				width: 540,
				height: 220,
			},
		},
	}
];

const Slider: React.FC<Props> = ({
	                                 heroBanner = defaultSlider,
	                                 className = 'mb-7',
	                                 contentClassName = 'py-24',
	                                 heroContent = true,
	                                 image,
	                                 someText, someLink, ...props
                                 }) => {

	console.log(props)

	if (onlyForBuilder()) {
		return <div data-component={"Slider"}>

			<div data-element style={{height: 400, border: "solid red 1px", margin: 30}}>
				<img  {...IsEditable({image: "src"})} src="https://lavar.com.ua/image/cache/catalog/vafelni-kartynku/vk-1172-750x750-product_thumb.jpg" alt=""/>
				<a {...IsEditable({someText: "textContent", someLink: "href"})} href="/"> text from </a>
			</div>
			<div data-element style={{height: 400, border: "solid red 1px", margin: 30}}>
				<img  {...IsEditable({image: "src"})} src="https://lavar.com.ua/image/cache/catalog/vafelni-kartynku/vk-1172-750x750-product_thumb.jpg" alt=""/>
				<a {...IsEditable({someText: "textContent", someLink: "href"})} href="/"> text from </a>
			</div>
			<button> add</button>
			<script>


			</script>

		</div>
	}
	console.log({
		someLink,
		someText
	})
	return (
		<div data-component={"Slider"} className={`${className}`}>
			{// @ts-ignore
				<Carousel
					pagination={{
						clickable: true,
					}}
					navigation={true}
					autoplay={true}
					prevActivateId={`prevActivateId`}
					nextActivateId={`nextActivateId`}
					className={'overflow-hidden'}
				>
					{heroBanner?.map((banner: any) => (
						<SwiperSlide key={`banner--key${banner.id}`}>
							{/*<HeroBannerCard*/}
							{/*	banner={banner}*/}
							{/*	variant="slider"*/}
							{/*	heroContentCard={heroContent}*/}
							{/*	className={contentClassName}*/}
							{/*/>*/}
							{someText}
							<img src={image} alt=""/>
						</SwiperSlide>
					))}
				</Carousel>}
		</div>
	);
};

export default Slider;
