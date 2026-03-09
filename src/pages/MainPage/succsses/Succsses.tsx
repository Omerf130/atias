import { useNavigate } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Succsses.scss';
import type { ISuccess } from '../../../interfaces/interfaces';

interface SuccessProps {
  data: ISuccess[];
  title: string;
  componentType:string
}

const Succsses = ({ data, title, componentType }: SuccessProps) => {
  const navigate = useNavigate();

  return (
    <div className="succsses-container">
      <h1 className="succsses-title">{title}</h1>
      <Carousel
        additionalTransfrom={0}
        autoPlay={true}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container"
        draggable
        focusOnSelect
        infinite={true}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
          tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
          mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
        }}
        rewind={false}
        rewindWithAnimation={false}
        shouldResetAutoplay
        showDots
        sliderClass="slider"
        slidesToSlide={1}
        swipeable
      >
        {data.map((item,index) => (
          <div key={item.id} className="succsses-card">
            <div className="succsses-card-title">{item.headline}</div>
            <div className="succsses-card-subtitle">{item.description}</div>
            <button
              className='success-btn'
              onClick={() => navigate(`/${componentType}/${index + 1}`)}
            >
              לחץ כאן כדי לראות עוד הצלחות של המשרד
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Succsses;
