import { useState } from "react";
import "./NavMobile.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../../../assets/pics/logo.jpeg";

import type { INavLink } from "../../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

interface NavMobileProps {
  links: INavLink[];
  handleLogoClick: () => void;
}

const NavMobile = ({ links, handleLogoClick }: NavMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const renderLinks = () =>
    links.map(({ label, isDropdownExist, href }) => (
      <div key={label} className="mobile-link">
        {isDropdownExist ? (
          <div
            className="mobile-link-main"
            onClick={() => handleDropdownToggle(label)}
          >
            <span>{label}</span>
            <span className="dropdown-toggle">
              {openDropdown === label ? "-" : "+"}
            </span>
          </div>
        ) : href === "/aboutCompany" ? (
          <a
            href={href}
            className="mobile-link-main"
            onClick={(e) => {
              e.preventDefault(); // לא לתת ל-reload לקרות
              navigate(href);
              setIsOpen(false);
            }}
          >
            <span>{label}</span>
          </a>
        ) : (
          <a
            href={href}
            className="mobile-link-main"
            onClick={() => setIsOpen(false)}
          >
            <span>{label}</span>
          </a>
        )}

        {isDropdownExist && openDropdown === label && (
          <div className="dropdown-items">
            {label === "תחומי התמחות" && (
              <>
                <div
                  className="dropdown-item"
                  onClick={() => {
                    navigate("/about/1");
                    setIsOpen(false);
                  }}
                >
                  עורך דין צביקה אשכנזי
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => {
                    navigate("/about/2");
                    setIsOpen(false);
                  }}
                >
                  עורכת דין אירה אטיאס
                </div>
              </>
            )}

            {label === "מאמרים" && (
              <div className="mobile-dropdown">
                <div>
                  <a
                    href="#propertySection"
                    className="dropdown-item"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    מקרקעין
                  </a>
                </div>
                <div>
                  <a
                    href="#damageSection"
                    className="dropdown-item"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    נזיקין
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    ));

  return (
    <div className="nav">
      <GiHamburgerMenu
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      />

      <nav className={`nav-list ${isOpen ? "show" : ""}`}>
        <IoMdClose className="close-icon" onClick={() => setIsOpen(false)} />
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" />
        </div>
        {renderLinks()}
      </nav>
    </div>
  );
};

export default NavMobile;
