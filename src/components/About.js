import React from "react";

function About() {
    return (
        <section id="about" className="about-section mb-5">
            <div className="about-inner-block py-5">
                <div className="container py-lg-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="col-12 mb-2">
                                <span className="span-heading">My Intro</span>
                                <p className="heading-withline">
                                    About me
                                </p>
                            </div>
                            <div className="col-12">
                                <p className="profile-summary">
                                    I have 6+ years of professional experience in User Interface and Application development using web technologies for building content management systems, eCommerce applications, landing pages, etc. Worked as Front end UI & AEM Author Developer at Langoor Marketing Transformation Pvt Ltd. For (Client : Hindustan Unilever). I am adept at developing web-based application systems with highly interactive user interfaces, rich user experiences, building custom responsive themes & functionality.
                                </p>
                            </div>
                            <div className="col-12">
                                <div>
                                    <p className="profile-summary">Name : G Samiulla Khan</p>
                                </div>
                                <div>
                                    <p className="profile-summary">Phone : +91 9000402177</p>
                                </div>
                                <div>
                                    <p className="profile-summary">Email : samiullakhan.mm@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-lg-0 mt-3 text-lg-center tablet-grid rounded-container d-flex flex-column justify-content-center">
                            <div className="image-wrapper">
                                <img alt="Home Desktop Banner" src="./samiulla-khan.jpg" />
                            </div>
                            <div>
                                <h5 className="mt-4" style={{ textShadow: '2px 6px 5px #ffbf01' }}>
                                - Samiulla Khan
                                </h5>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;