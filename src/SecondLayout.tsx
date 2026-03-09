import Nav from "./components/nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const SecondLayout = () => {
  return (
    <div className="app">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SecondLayout;
