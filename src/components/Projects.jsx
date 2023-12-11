/* eslint-disable react/no-unescaped-entities */

import { FaCode, FaPlay } from "react-icons/fa6";

const Projects = () => {
    return (
        <div className="my-20 mb-10">
            <div className="my-8">
                <h3 className="text-4xl font-extrabold  items-center text-center">My recent Projects</h3>
            </div>

            <div className="hero bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/src/assets/medico.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Medico</h1>
                        <p className="py-6">Medical Camp Management System .It is an user-friendly MERN
                            (MongoDB, Express.js, React, Node.js) application meticulously crafted to
                            revolutionize the efficiency of organizing and managing medical camps</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                        <div className="">
                        <a className="btn btn-outline text-black mr-1" href="https://medico-76bc1.web.app/" ><FaPlay ></FaPlay>Live Preview</a>
                        <a className="btn btn-outline text-black mr-1" href="https://github.com/Ahnaf-17/medico-client" ><FaCode></FaCode> Client Repository</a>
                        <a className="btn btn-outline text-black" href="https://github.com/Ahnaf-17/medico-server" ><FaCode></FaCode> Server Repository</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider my-4"></div>

            <div className="hero bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse text-right">
                    <img src="/src/assets/blog.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Travelers Blog</h1>
                        <p className="py-6">It is a platform where blogger's (specially travel blogger's) can share their
                            regular travel blogs . This platform is based on MERN(MongoDB,
                            Express.js, React, Node.js)</p>
                            <div className="">
                        <a className="btn btn-outline text-black mr-1" href="https://blog-a53ab.web.app/" ><FaPlay ></FaPlay>Live Preview</a>
                        <a className="btn btn-outline text-black mr-1" href="https://github.com/Ahnaf-17/blog-client" ><FaCode></FaCode> Client Repository</a>
                        <a className="btn btn-outline text-black" href="https://github.com/Ahnaf-17/blog-server" ><FaCode></FaCode> Server Repository</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider my-4"></div>

            <div className="hero bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/src/assets/shop.png" className="max-w-sm  rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Classy Shop</h1>
                        <p className="py-6">A MERN(MongoDB, Express.js, React, Node.js) application . It is basically
                            a clothing website where different clothing brand can sell their products.</p>
                            <div className="">
                        <a className="btn btn-outline text-black mr-1" href="https://classy-shop.web.app/#slide1" ><FaPlay ></FaPlay>Live Preview</a>
                        <a className="btn btn-outline text-black mr-1" href="https://github.com/Ahnaf-17/classy-shop-server" ><FaCode></FaCode> Client Repository</a>
                        <a className="btn btn-outline text-black" href="https://github.com/Ahnaf-17/classy-shop-client" ><FaCode></FaCode> Server Repository</a>
                        </div>                    </div>
                </div>
            </div>









            {/* <div className="flex flex-col w-full">
                <div className="grid h-80 card bg-base-100 rounded-box place-items-center">
                    <div className="hero h-80 bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="/src/assets/medico.png" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Medico</h1>
                                <p className="py-6">Medical Camp Management System .It is an user-friendly MERN
                                    (MongoDB, Express.js, React, Node.js) application meticulously crafted to
                                    revolutionize the efficiency of organizing and managing medical camps</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="grid  card bg-base-100 rounded-box place-items-center">
                    <div className="hero h-80 bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse text-right">
                            <img src="/src/assets/blog.png" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Travelers Blog</h1>
                                <p className="py-6">It is a platform where blogger's (specially travel blogger's) can share their
                                    regular travel blogs . This platform is based on MERN(MongoDB,
                                    Express.js, React, Node.js)</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="grid card bg-base-100 rounded-box place-items-center">
                    <div className="grid  card bg-base-100 rounded-box place-items-center">
                        <div className="hero h-80 bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="/src/assets/shop.png" className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">Classy Shop</h1>
                                    <p className="py-6">A MERN(MongoDB, Express.js, React, Node.js) application . It is basically
                                        a clothing website where different clothing brand can sell their products.</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Projects;