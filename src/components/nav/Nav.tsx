import "./Nav.scss";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useState } from "react";
import logo from "../../assets/pics/logonew.png";
import { useLocation, useNavigate } from "react-router-dom";
import NavMobile from "./NavMobile/NavMobile";

const navLinks = [
  { href: "/aboutCompany", label: "אודות", isDropdownExist: false },
  { href: "/about/3", label: "דיני נזיקין", isDropdownExist: false },
  { href: "#damageSection", label: "מאמרים", isDropdownExist: false },
  { href: "#contact", label: "צור קשר", isDropdownExist: false },
];

const Nav = () => {
  const isMobile = useWindowWidth(640);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const renderLinks = (className = "") =>
    navLinks.map(({ href, label, isDropdownExist }) => (
      <div key={href} className={`nav-link-wrapper ${className}`}>
        {isDropdownExist ? (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleDropdownToggle(label);
            }}
          >
            {label}
          </a>
        ) : href.startsWith("/") ? (
          <a
            href={href}
            onClick={(e) => {
              e.preventDefault();
              navigate(href);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {label}
          </a>
        ) : (
          <a href={href}>{label}</a>
        )}
  
        {/* 🔹 Dropdown content */}
        {isDropdownExist && (
          <div
            className={`dropdown-content ${
              openDropdown === label ? "visible" : ""
            }`}
          >
            {label === "תחומי התמחות" && (
              <>
                <a href="#" onClick={() => navigate("/about/1")}>
                  עורך דין צביקה אשכנזי
                </a>
                <a href="#" onClick={() => navigate("/about/2")}>
                  עורכת דין אירה אטיאס
                </a>
              </>
            )}
  
            {label === "מאמרים" && (
              <>
                <a href="#propertySection">
                  מקרקעין
                </a>
                <a href="#damageSection">
                  נזיקין
                </a>
              </>
            )}
          </div>
        )}
      </div>
    ));

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`nav-container ${isHome ? "homepage" : ""}`}>
      <div className={isMobile ? "nav-wrapper-mobile" : "nav-wrapper"}>
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" />
        </div>
        {isMobile && isHome ? (
          <NavMobile links={navLinks} handleLogoClick={handleLogoClick} />
        ) : (
          <>
            {isHome && <nav className="nav-list">{renderLinks()}</nav>}
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
