import "./App.css";
import Blog from "./components/Blog-component/Blog";
import Faq from "./components/Faq-component/Faq";
import Footer from "./components/Footer-component/Footer";
import LandingPage from "./components/landing-page-components/LandingPage";
import Mention from "./components/Mention-component/Mention";
import Portfolio from "./components/portfolio-component/Portfolio";
import Services from "./components/services-components/Services";
import Smartcontract from "./components/Smart-contract-component/Smartcontract";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Services />
      <Portfolio />
      <Smartcontract />
      <Mention />
      <Faq />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
