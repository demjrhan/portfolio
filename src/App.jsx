import RotatingFooterText from "./components/FooterText.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";
import Landing from "./components/Landing.jsx";
import AboutMe from "./components/AboutMe.jsx";



export default function App() {


    return (
        <>
            <Landing/>
            <AboutMe/>
            <Projects/>
            <Footer/>
            <RotatingFooterText/>
        </>
    );
}
