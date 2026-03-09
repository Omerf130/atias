import "./Footer.scss";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useCurrentRoute from "../../hooks/useCurrentRoute";

const Footer = () => {
  const navigate = useNavigate();
  const currentRoute = useCurrentRoute();
  const isHomepage = currentRoute === "/";

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        {/* <a onClick={() => { handleNavigate("/about/1") }}>דיני מקרקעין</a> */}
        <a onClick={() => { handleNavigate("/about/2") }}>דיני נזיקין</a>
        <a onClick={() => { handleNavigate("/aboutCompany") }}>אודות</a>
        {isHomepage && <a href="#articles">מאמרים</a>}
        <a onClick={() => { handleNavigate("/accessability") }}>הצהרת נגישות</a>
        <a onClick={() => { handleNavigate("/privacy") }}>הצהרת פרטיות</a>
      </div>
      <div className="footer-icons">
        <FaWhatsapp className="icon" />
        <a href="https://www.facebook.com/share/1DRhTXo2Ay/" target="_blank" rel="noopener noreferrer">
          <CiFacebook className="icon" />
        </a>
        <BsInstagram className="icon" />
        <FaTwitter className="icon" />
      </div>
      <p className="footer-credit">
        אתר זה נבנה על ידי{' '}
        <a
          href="https://weblio.co.il"
          target="_blank"
          rel="noopener noreferrer"
          className="credit-link"
        >
          weblio
        </a>
      </p>
    </footer>
  );
};

export default Footer;
