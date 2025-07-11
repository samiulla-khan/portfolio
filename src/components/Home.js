import React from "react";

function Home() {
    return (
        <section id="home" className="home-banner">
            {/* <img src="./Home-Banner-One.jpg" alt="Home Desktop Banner" className="w-100 desktop-image" />
            <img src="./home-mibile-banner.jpg" alt="Home Mobile Banner" className="w-100 mobile-image" />
             */}
            <div className="col-md-12 p-0 text-center text-white home-banner-content">
                <div className="col-md-12 p-md-5 p-3">
                    <p className="mb-0 font-weight-bold">Hello! I am</p>
                    <h1 className="main-heading d-block font-weight-bolder">
                        G Samiulla Khan
                    </h1>
                    <h2>Front-end & AEM Author Developer</h2>
                </div>
            </div>
        </section>
    )
}

export default Home;