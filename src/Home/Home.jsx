import Banner from "../components/Banner";
import EduAndExp from "../components/Edu&Exp/EduAndExp";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <div className="bg-slate-800">
            {/* <Navbar></Navbar> */}
            <div className="max-w-7xl mx-auto pt-10">
            <Banner></Banner>
            <Skills></Skills>
            <EduAndExp></EduAndExp>
            <Projects></Projects>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;
// className="max-w-7xl mx-auto mt-10"