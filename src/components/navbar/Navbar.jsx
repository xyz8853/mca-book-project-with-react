import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../../img/logo1.png";
import './navbar.css';



function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="img-fluid" src={navLogo} alt="" />
                    </a>
                    <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"
                        data-bs-target="#navbarSupportedContent"
                        data-bs-toggle="collapse"
                        type="button"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item home-li">
                                <a aria-current="page" className="nav-link home-url" href="#">
                                    <Link to={"/"}>Home</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to={"/cources"}>Cources</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to={"/mcq"}>MCQ</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to={"/exercise"}>Exercise</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to={"/advance"}>Practice</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to={"/about-me"}>About</Link>
                                </a>
                            </li>
                            <li className="nav-item contact-li">
                                <a className="nav-link contact-url" href="#">
                                    <Link to={"/contact-us"}>Contact</Link>
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to={"/"}></Link>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;
