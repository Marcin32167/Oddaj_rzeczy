import HomeHeader from "./HomeHeader.jsx";
import Main from "./Main.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import OddajRzeczy from "./OddajRzeczy.jsx";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <Main />
            <HomeThreeColumns/>
            <OddajRzeczy />
            <AboutUs />
            <Contact />

        </>
    )
}
export default Home;