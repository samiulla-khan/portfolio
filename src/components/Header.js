import React from "react";
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm fixed-top header-bg p-3">
                <div className="container">
                    <div>
                        <a className="navbar-brand" href="index.html">
                            <p className="span-heading mb-0">Samiulla <span style={{ color: '#333' }}>khan</span></p>
                        </a>
                    </div>
                    <button className="navbar-toggler head-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul id="menu-primary-header" className="navbar-nav ml-auto">
                            <li className="nav-item"><a title="Home" href="#home" className="nav-link">Home</a></li>
                            <li className="nav-item"><a title="About" href="#about" className="nav-link">About</a></li>
                            <li className="nav-item"><a title="Education" href="#education" className="nav-link">Education</a></li>
                            <li className="nav-item"><a title="Skills" href="#skills" className="nav-link">Skills</a></li>
                            <li className="nav-item"><a title="Experience" href="#experience" className="nav-link">Experience</a></li>
                            <li className="nav-item"><a title="Projects" href="#projects" className="nav-link">Projects</a></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;