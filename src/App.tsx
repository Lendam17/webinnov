import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './css/typography.css';
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
