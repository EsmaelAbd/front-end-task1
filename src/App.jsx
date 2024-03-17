import "./App.css";
import Hero from "./components/Card/Hero";
import BestDeal from "./components/Container/BestDeal";
import ContactSection from "./components/Container/ContactSection/ContactSection";
import ContactUs from "./components/Container/ContactSection/ContactUs";
import FunFact from "./components/Container/FunFact";
import SecondSection from "./components/Container/SecondSection";
import VideoContent from "./components/Container/VideoContent";
import VideoSection from "./components/Container/VideoSection";
import PropertiesSection from "./components/Container/propertiesSection/PropertiesSection";
import Footer from "./components/Footer/Footer";
import FirstNav from "./components/NavBar/FirstNav";
import NavBar from "./components/NavBar/NavBar";
import HomeBG from "./components/imgs/banners/banner-01.jpg";

function App() {
  return (
    <>
      <div>
        <FirstNav />
        <NavBar
          logo="VILLA"
          navitems={["Home", "Properties", "Property Details", "Contact Us"]}
        />
        <Hero img={HomeBG} />
        <SecondSection />
        <VideoSection />
        <VideoContent />
        <FunFact />
        <BestDeal />
        <PropertiesSection />
        <ContactSection />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
