import React from "react";

function Projects() {
    return (
        <section id="projects" className="projects-section mb-5">
            <div className="container py-lg-5">
                <div className="row mb-5">
                    <span className="span-heading">Some of the projects, where i have worked</span>
                    <p className="heading-withline">
                        Works
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 pb-4">
                        <div className="project-card">
                            <div className="project-card__image">
                                <img src="./niranta.png" alt="nitanta solutions and services" />
                            </div>
                            <div className="project-card__title">
                                <p>Niranta Solutions & Services Pvt Ltd <span>2017-2019</span> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-4">
                        <div className="project-card">
                            <div className="project-card__image">
                                <img src="./langoor-havas.png" alt="nitanta solutions and services" />
                            </div>
                            <div className="project-card__title">
                                <p>Langoor Digitals Pvt Ltd <span>Oct 2019 - Aug 2022</span> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-4">
                        <div className="project-card">
                            <div className="project-card__image">
                                <img src="./infosys.png" alt="nitanta solutions and services" />
                            </div>
                            <div className="project-card__title">
                                <p>Infosys Pvt Ltd <span>Aug 2022 –  Nov 2022 </span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-4">
                        <div className="project-card">
                            <div className="project-card__image">
                                <img src="./langoor.png" alt="nitanta solutions and services" />
                            </div>
                            <div className="project-card__title">
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

export default Projects;