import HomeHeader from "./HomeHeader.jsx";
import HeroSection from "./HeroSection.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import OddajRzeczy from "./OddajRzeczy.jsx";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import Oddaj from "./Oddaj.jsx";
import '../scss/main.scss';
import WhoWeHelp from "./WhoWeHelp.jsx";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HeroSection />
            <HomeThreeColumns/>
            <OddajRzeczy />
            <Oddaj />
            <AboutUs />
            <WhoWeHelp />
            <Contact />

        </>
    )
}
export default Home;