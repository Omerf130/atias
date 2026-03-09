import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import MainPage from "./pages/MainPage/MainPage";
import Accessability from "./pages/accessability/Accessability";
import Privacy from "./pages/privacy/Privacy";
import Article from "./pages/Article/Article";
import MainLayout from "./MainLayout";
import SecondLayout from "./SecondLayout";
import AboutCompany from "./pages/aboutCompany/AboutCompany";
import SuccssesPage from "./pages/SuccssesPage/SuccssesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/aboutCompany" element={<AboutCompany />} />
          <Route path="/success/:id" element={<SuccssesPage />} />
          <Route path="/house/:id" element={<SuccssesPage />} />
          <Route path="/damage/:id" element={<SuccssesPage />} />
          <Route path="/accessability" element={<Accessability />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
        <Route element={<SecondLayout />}>
          <Route path="/article/:id" element={<Article />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
