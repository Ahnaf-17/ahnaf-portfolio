/* eslint-disable react/no-unescaped-entities */
import { FaDownload } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

import resume from '../assets/resume_ahnaf.pdf'

import img from '../assets/resized-image.jpg'
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: '1000' })
    }, [])

    return (
        <div className="hero min-h-[500px] bg-base-content" >
            <div className="hero-content flex-col lg:flex-row-reverse text-white">
                <div data-aos="fade-left">
                    <img src={img} className="max-w-sm rounded-lg " />
                </div>
                <div data-aos="fade-right">
                    <h1 className="text-5xl font-bold">Hello, I'm <br />Ahnaf Ahmed</h1>
                    <p className="py-6">Frontend Developer with a Computer Science degree, ready to turn ideas into user-friendly designs. <br />I blend my academic knowledge with practical skills to create seamless digital experiences. <br /> Explore my portfolio for innovative solutions merging technology and creativity.</p>
                    <a className="btn bg-neutral hover:bg-black text-white mr-1" href={resume} download><FaDownload></FaDownload> Download Resume</a>
                    <a className="btn bg-neutral hover:bg-black text-white" href="mailto:ahnaf.ahmed.42173@gmail.com" download><MdMail></MdMail> Email Me</a>


                </div>
            </div>
        </div>
    );
};

export default Banner;