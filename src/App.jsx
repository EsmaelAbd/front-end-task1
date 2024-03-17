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
import mapimg from "./components/imgs/Map.png";
import picon from "./components/imgs/ContactSec/phone-icon.png";
import eicon from "./components/imgs/ContactSec/email-icon.png";
import bdeal from "./components/imgs/Deal/deal-01.jpg";
import chairs from "./components/imgs/Ss/featured.jpg";
import micon from "./components/imgs/Ss/featured-icon.png";
import vfram from "./components/imgs/video-frame.jpg";
import vbg from "./components/imgs/video-bg.jpg";
import csbg from "./components/imgs/ContactSec/contact-bg.jpg";

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
        <SecondSection img={chairs} micon={micon} />
        <VideoSection img={vbg} />
        <VideoContent img={vfram} />
        <FunFact />
        <BestDeal img={bdeal} />
        <PropertiesSection />
        <ContactSection img={csbg} />
        <ContactUs img={mapimg} picon={picon} eicon={eicon} />
        <Footer />
      </div>
    </>
  );
}

export default App;
