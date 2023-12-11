import '../Style/cardStyle.css'
import img1 from '../assets/react.png'
import img2 from '../assets/HTML5_Badge.svg.png'
import img3 from '../assets/css.png'
import img4 from '../assets/js.png'
import img5 from '../assets/express.png'
import img6 from '../assets/tailwind.png'
import img7 from '../assets/node.png'
import img8 from '../assets/mongo.jpg'
const Skills = () => {
    return (
        <div className="my-10">
            <div className="my-8">
                <h3 className="text-4xl font-extrabold  items-center text-center">Familiar with</h3>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">React</h2>
                        <p>A JavaScript library for building user interfaces</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">HTML</h2>
                        <p>The standard markup language for creating web pages</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">CSS</h2>
                        <p>A style sheet language used for describing the presentation of a document written in HTML</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">JavaScript</h2>
                        <p>A programming language that enables interactive web pages</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Express.js</h2>
                        <p>A web application framework for Node.js designed for building web applications and APIs</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tailwind CSS</h2>
                        <p>A utility-first CSS framework for rapidly building custom designs</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img7} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Node.js</h2>
                        <p>An open-source, cross-platform JavaScript runtime environment that executes JavaScript code server-side</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img8} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MongoDB</h2>
                        <p>A NoSQL database program that uses JSON-like documents with optional schemas</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="skill-container">
                <div className="skills">
                    <img className='img-skill' src="/src/assets/js.png" alt=""/>
                    <h3 className="skill-title">Vailla javaScript</h3>
                    <p className="skill-text">List skill/technologies here. You can change the icon above to any of the
                        1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="skills">
                    <img src="/src/assets/react.png" alt=""/>
                    <h3 className="skill-title">React</h3>
                    <p className="skill-text">List skill/technologies here. You can change the icon above to any of the
                        1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="skills">
                    <img src="/src/assets/node.png" alt=""/>
                    <h3 className="skill-title">Node.js</h3>
                    <p className="skill-text">List skill/technologies here. You can change the icon above to any of the
                        1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="skills">
                    <img src="/src/assets/mongo.jpg" alt=""/>
                    <h3 className="skill-title">MongoDB</h3>
                    <p className="skill-text">List skill/technologies here. You can change the icon above to any of the
                        1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
            </div> */}
        </div>
    );
};

export default Skills;