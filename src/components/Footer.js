import React from "react";

const Footer = () => {
    return (
        <>
            <section class="footer">
                <div class="share">
                    <a href="mailto:contact@iitianpastawala.com" class="fas fa-envelope"></a>
                    <a href="https://www.facebook.com/iitianpastawala" target="_blank" rel="noopener noreferrer" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="https://www.instagram.com/iitianpastawala/" target="_blank" rel="noopener noreferrer" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                </div>
                <div class="links">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#menu">menu</a>
                    <a href="#products">products</a>
                    <a href="#review">review</a>
                    <a href="#contact">contact</a>
                    <a href="#blogs">blogs</a>
                </div>
                {/* <div class="credit">
                    created by <span> <a href="https://www.mithilastack.com/" target="_blank" rel="noopener noreferrer"></a>Mithila Stack</span> | all rights reserved
                </div> */}
                <div class="credit">
                    created by{" "}
                    <span>
                        <a href="https://www.mithilastack.com/" target="_blank" rel="noopener noreferrer">
                            Mithila Stack
                        </a>
                    </span>{" "}
                    | all rights reserved
                </div>
            </section>
        </>
    );
};

export default Footer;
