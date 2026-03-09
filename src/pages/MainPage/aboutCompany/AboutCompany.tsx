import { useNavigate } from "react-router-dom";
import "./AboutCompany.scss";

const AboutCompany = () => {
  const navigate = useNavigate();
  return (
    <div className="about-me-container" id="aboutCompany">
    <h1 className="about-me-title">
  <span className="title-part">אודות המשרד</span>{" "}
  <span className="title-part part-2">'אטיאס ושות</span>
</h1>
      <div className="about-me-subtitle">
       משרד עורכי הדין אטיאס ושות' - מעניק שירותים משפטיים בתחומי המשפט האזרחי, תוך התמחות מיוחדת בדיני נזיקין, צוואות והסכמי ממון. המשרד מספק גם שירותי גישור וניהול סכסוכים משפטיים, בגישה אסטרטגית, יעילה ויצירתית.
      </div>
      <button onClick={() => navigate("/aboutCompany")} className="about-btn">
        קרא עוד
      </button>
    </div>
  );
};

export default AboutCompany;
