
import LicenseIcon from '@components/icons/featured/license-icon';
import FeedbackIcon from '@components/icons/featured/feedback-icon';
import SyncIcon from '@components/icons/featured/sync-icon';
import RocketIcon from '@components/icons/featured/rocket-icon';
import FeaturedCard from '@components/cards/featured-card';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from '@components/ui/carousel/slider';
import ThumbsIcon from '@components/icons/featured/thumbs-icon';
import {ROUTES} from "@utils/routes";
import {IsEditable, onlyForBuilder} from "@components/config";

const data = [
    {
        id: 1,
        icon: (
            <RocketIcon
                color="#333"
            />
        ),
        title: 'feature-title-one',
        description: 'feature-title-one-description',
        href: ROUTES.SEARCH,
    },
    {
        id: 2,
        icon: (
            <SyncIcon
                color="#333"
            />
        ),
        title: 'feature-title-two',
        description: 'feature-title-two-description',
        href: ROUTES.SEARCH,
    },
    {
        id: 3,
        icon: (
            <FeedbackIcon
                color="#333"
            />
        ),
        title: 'feature-title-three',
        description: 'feature-title-three-description',
        href: ROUTES.SEARCH,
    },
    {
        id: 4,
        icon: (
            <ThumbsIcon
                color="#333"
            />
        ),
        title: 'feature-title-four',
        description: 'feature-title-four-description',
        href: ROUTES.SEARCH,
    },
    {
        id: 5,
        icon: (
            <LicenseIcon
                color="#333"
            />
        ),
        title: 'feature-title-five',
        description: 'feature-title-five-description',
        href: ROUTES.SEARCH,
    },
];

interface Props {
    className?: string;
    classNameCarousel?: string;
    Slides: any
}

const breakpoints = {
    '1536': {
        slidesPerView: 5,
    },
    '1280': {
        slidesPerView: 4,
    },
    '1024': {
        slidesPerView: 3,
    },
    '768': {
        slidesPerView: 2,
    },
    '640 ': {
        slidesPerView: 2,
    },
    '0': {
        slidesPerView: 1,
    },
};

const FeatureCarousel: React.FC<Props> = ({ className = 'mb-7 md:mb-10 ',classNameCarousel,Slides }) => {

    console.log('asdFeatureCarousel', Slides)

    if (onlyForBuilder()) {
        return (
          <div data-component="FeatureCarousel" style={{ margin: "0 0 15px 0" }}>
              <div data-repeater="Slides" style={{ borderBottom: "solid red 1px", margin: "0 0 15px 0" }}>
                  <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <div data-repeaterbtn="removeElem" style={{ cursor: "pointer", margin: "0 0 10px auto", padding: "2px 15px", borderRadius: "9999px", background: "#EF4444", fontSize: "16px", color: "#fff" }}>
                          Remove Slide
                      </div>
                  </div>

                  <img {...IsEditable({ imageSrc: "src", imageAlt: "textContent" })} src="https://lavar.com.ua/image/cache/catalog/vafelni-kartynku/vk-1172-750x750-product_thumb.jpg" alt="" />
                  <h3 {...IsEditable({ title: "textContent" })}>Title</h3>
                  <p {...IsEditable({ description: "textContent" })}>paragraph text</p>
                  <a {...IsEditable({ btnText: "textContent", btnUrl: "href" })} href="#"> link text </a>

              </div>

              <div data-repeaterbtn="addElem" style={{ cursor: "pointer", display: "inline-block", padding: "2px 15px", borderRadius: "9999px", background: "#2C752F", fontSize: "16px", color: "#fff" }}>
                  Add Slide
              </div>
          </div>

        )
    }

    return (
        <div className={`mb-7 md:mb-10 ${className}`}>
            {// @ts-ignore
                <Carousel
                  autoplay={false}
                  breakpoints={breakpoints}
                  prevActivateId="featured-carousel-button-prev"
                  nextActivateId="featured-carousel-button-next"
                  prevButtonClassName="start-3  3xl:top-auto 3xl:-translate-y-2 4xl:-translate-y-10"
                  nextButtonClassName={`end-3  3xl:top-auto transform 2xl:translate-x-0 3xl:-translate-y-2 `}
                  className={`rounded-md border border-black/10 py-6  ${classNameCarousel}`}
                >
                    {Slides?.map((item) => (
                      <SwiperSlide key={`featured-key-${item.id}`}>
                          <FeaturedCard item={item}/>
                      </SwiperSlide>
                    ))}

                </Carousel>}
        </div>
    );
};

export default FeatureCarousel;
