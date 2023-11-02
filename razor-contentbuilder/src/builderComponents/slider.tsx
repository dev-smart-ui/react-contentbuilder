import HeroBannerCard from '@components/hero/hero-banner-card';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from '@components/ui/carousel/slider';
import {onlyForBuilder, IsEditable} from "@components/config";

interface Props {
	heroBanner?: any;
	className?: string;
	contentClassName?: string;
	heroContent?: boolean;
	builderProps?: any
	Slides?: any
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
	                                 Slides, ...props
                                 }) => {

	console.log('SliderProps ', Slides)

	if (onlyForBuilder()) {
		return (
				<div data-component="Slider">
					<div data-repeater="Slides" style={{ height: 400, border: "solid red 1px", margin: "0 0 30px 0" }}>
						<button data-repeaterbtn="removeElem" style={{ cursor: "pointer" }}>remove elem</button>
						<img {...IsEditable({ image: "src" })} src="https://lavar.com.ua/image/cache/catalog/vafelni-kartynku/vk-1172-750x750-product_thumb.jpg" alt="" />
						<a {...IsEditable({ someText: "textContent", someLink: "href" })} href="#"> text from </a>
					</div>

					<button data-repeaterbtn="addElem" style={{ cursor: "pointer" }}>add elem</button>
				</div>

		)
	}

	return (
		<div data-component={"Slider"} className={`${className}`}>
			{
						// @ts-ignore
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

							{Slides?.map((banner: any, i: number) => (
								<SwiperSlide key={`banner--key${i}`}>
									{/*<HeroBannerCard*/}
									{/*	banner={banner}*/}
									{/*	variant="slider"*/}
									{/*	heroContentCard={heroContent}*/}
									{/*	className={contentClassName}*/}
									{/*/>*/}
									{banner.someText}
									<img src={banner.image} alt=""/>
								</SwiperSlide>
							))}
						</Carousel>
				}
		</div>
	);
};

export default Slider;
