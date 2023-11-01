import HeroBannerCard from '@components/hero/hero-banner-card';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from '@components/ui/carousel/slider';

interface Props {
	heroBanner?: any;
	className?: string;
	contentClassName?: string;
	heroContent?: boolean;
}

const defaultSlider  = [
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

const HeroTwoSliderBlock: React.FC<Props> = ({
																							 heroBanner=defaultSlider,
																							 className = 'mb-7',
																							 contentClassName = 'py-24',
																							 heroContent = true,
																						 }) => {
	return (
		<div className={`${className}`}>
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
							<HeroBannerCard
								banner={banner}
								variant="slider"
								heroContentCard={heroContent}
								className={contentClassName}
							/>
						</SwiperSlide>
					))}
				</Carousel>}
		</div>
	);
};

export default HeroTwoSliderBlock;
