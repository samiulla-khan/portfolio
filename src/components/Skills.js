import React from "react";

function Skills() {
    return (
        <section id="skills" className="skills-section mb-5">
            <div className="container py-lg-5">
                <div className="row mb-5">
                    <span className="span-heading">My Skills</span>
                    <p className="heading-withline">
                        My Expertise Area
                    </p>
                </div>
                <div className="row py-lg-4">
                    <div className="col-lg-6 pe-lg-5">
                        <div className="progress-info">
                            <h6 className="progress-tittle">Web Design <span>80%</span></h6>
                            <div className="progress">
                                <div className="progress-bar gradient-1" style={{ width: '80%' }}></div>
                            </div>
                        </div>

                        <div className="progress-info">
                            <h6 className="progress-tittle">HTML/CSS <span>95%</span></h6>
                            <div className="progress">
                                <div className="progress-bar gradient-2" style={{ width: '95%' }}></div>
                            </div>
                        </div>

                        <div className="progress-info">
                            <h6 className="progress-tittle">JavaScript <span>60%</span></h6>
                            <div className="progress">
                                <div className="progress-bar gradient-3" style={{ width: '60%' }}></div>
                            </div>
                        </div>

                        <div className="progress-info mb-0">
                            <h6 className="progress-tittle">React JS <span>85%</span></h6>
                            <div className="progress">
                                <div className="progress-bar gradient-4" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-5">
                        <div className="progress-info">
                            <h6 className="progress-tittle">Angular JS <span>80%</span></h6>
                            <div className="progress">
                                <div className="progress-bar gradient-1" style={{ width: '80%' }}></div>
                            </div>
                        </div>

                        <div className="progress-info">
                            <h6 className="progress-tittle">Bootstrap <span>95%</span></h6>
                            <div className="progress">
                                <div className="progress-bar gradient-2" style={{ width: '95%' }}></div>
                            </div>
                        </div>

                        <div className="progress-info">
                            <h6 className="progress-tittle">Graphic Design <span>60%</span></h6>
                            <div className="progress">
                                <div className="progress-bar gradient-3" style={{ width: '60%' }}></div>
                            </div>
                        </div>

                        <div className="progress-info mb-0">
                            <h6 className="progress-tittle">UI/UX Design <span>85%</span></h6>
                            <div className="progress">
                                <div className="progress-bar gradient-4" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills;