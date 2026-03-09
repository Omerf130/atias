import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide from "./Slide";
import "./Articles.scss";
import type { ISlideData } from "../../../interfaces/interfaces";

interface ArticlesProps {
  slides: ISlideData[]
  title: string
  sectionName: string
}
const Articles = ({slides, title, sectionName}: ArticlesProps) => {
  return (
    <div id={sectionName} className="articles-container">
      <h1 className="article-title">{title}</h1>
      <Carousel
        additionalTransfrom={0}
        autoPlay={true}  
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            partialVisibilityGutter: 0,
          },
          tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 3,
            partialVisibilityGutter: 0,
          },
          smallTablet: {
            breakpoint: { max: 640, min: 484 },
            items: 2,
            partialVisibilityGutter: 0,
          },
          mobile: {
            breakpoint: { max: 484, min: 0 },
            items: 1,
            partialVisibilityGutter: 0,
            slidesToSlide: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl
        shouldResetAutoplay
        showDots
        sliderClass="slider"
        slidesToSlide={1}
        swipeable
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            id={slide.id}
            description={slide.description}
            headline={slide.headline}
            image={slide.image}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Articles;
