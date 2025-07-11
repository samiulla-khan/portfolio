import React from "react";

function Experience() {
    return (
        <section id="experience" className="experience-section mb-5">
            <div className="container py-lg-5">
                <div className="row mb-5">
                    <span className="span-heading">Work Experience</span>
                    <p className="heading-withline">
                        Worked at
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 pb-4 py-sm-0">
                        <div className="company-card">
                            <div className="company-card__image">
                                <img src="./niranta.png" alt="nitanta solutions and services" />
                            </div>
                            <div className="company-card__title">
                                <p>Niranta Solutions & Services Pvt Ltd <span>2017-2019</span> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 pb-4 py-sm-0">
                        <div className="company-card">
                            <div className="company-card__image">
                                <img src="./langoor-havas.png" alt="nitanta solutions and services" />
                            </div>
                            <div className="company-card__title">
                                <p>Langoor Digitals Pvt Ltd <span>Oct 2019 - Aug 2022</span> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 pb-4 py-sm-0">
                        <div className="company-card">
                            <div className="company-card__image">
                                <img src="./infosys.png" alt="nitanta solutions and services" />
                            </div>
                            <div className="company-card__title">
                                <p>Infosys Pvt Ltd <span>Aug 2022 –  Nov 2022 </span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 pb-4 py-sm-0">
                        <div className="company-card">
                            <div className="company-card__image">
                                <img src="./langoor.png" alt="nitanta solutions and services" />
                            </div>
                            <div className="company-card__title">
                                <p>Langoor Marketing Transformation Pvt Ltd <span>Dec 2022 – Oct 2024</span></p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;