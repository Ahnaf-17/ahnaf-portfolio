import Banner from "../components/Banner";
import EduAndExp from "../components/Edu&Exp/EduAndExp";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Skills></Skills>
            <EduAndExp></EduAndExp>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;