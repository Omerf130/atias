import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import useCurrentRoute from "./hooks/useCurrentRoute";

const MainLayout = () => {
  const route = useCurrentRoute();
  const isHomepage = route === "/";

  return (
    <div className={`app ${isHomepage ? "homepage" : ""}`}>
      <Nav />
      <Outlet />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainLayout;