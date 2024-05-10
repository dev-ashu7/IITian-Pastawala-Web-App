import React from "react";
import AboutImg from "../assets/images/about-img.jpg";
const About = () => {
    return (
        <>
            <section className="about" id="about">
                <h1 className="heading">
                    <span>about</span> us
                </h1>

                <div className="row">
                    <div className="image">
                        <img src={AboutImg} alt="" />
                    </div>

                    <div className="content">
                        <h3>what makes our food special?</h3>
                        <p>in india, the indian institues of technology (iits) are highly prestigious institutions known for their rigorous academic programs and producing top-notch graduates.Associating your brand with IITians can create a preception of quality and excellence.</p>
                        <p>consumers may trust products associated with well-educated indivisuals, beliving that they adhere to high standardsand integrity. this can be particularly advantageous in the food industry where trust is crucial.</p>
                        <a href="#" className="btn">
                            learn more
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
