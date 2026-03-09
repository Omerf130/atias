import "./Hero.scss";
import video from "../../../assets/video/video.mp4";

const Hero = () => {

  return (
    <div className="hero-container">
      <div className="content-wrapper">
        <div className="content">
          <div className="hero-content">
            <p className="hero-title">'אטיאס ושות</p>
            <p className="hero-subtitle">מחלקת נזיקין</p>
          </div>
          <a className="hero-btn" href="#contact">
            !שיחת ייעוץ ראשונית ללא התחייבות
          </a>
        </div>
      </div>

      <video
        autoPlay
        muted
        playsInline
        loop
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="video-overlay"></div>
    </div>
  );
};

export default Hero;
