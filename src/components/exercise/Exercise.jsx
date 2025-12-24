import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import c1Language from "../../img/c-language.jpg";
import javaLanguage from "../../img/java2-language.jpg";
import reactLanguage from "../../img/react2-language.png";
import htmlLanguage from "../../img/html6.jpg";
import cssLanguage from "../../img/css4.jpg";
import javaScript from "../../img/js3.jpg"

export default function Exercise(){
    return(
        <>
    <Navbar></Navbar>
    <section className="type-cources-all mt-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-c-language">
                    <a href="#">
                        <Link to={"/c-exercise-programming"}>
                            <img src={c1Language} alt="" />
                        </Link>
                    </a>
                    <h3>C Exercise</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-java-language">
                    <a className="" href="">
                        <Link to={'/java-exercise-programming'}>
                            <img src={javaLanguage} alt="" />
                        </Link>
                    </a>
                    <h3>Java Exercise</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-react-language">
                    <a>
                        <Link to={"/react-exercise-programming"}>
                            <img src={reactLanguage} alt="" />
                        </Link>
                    </a>
                    <h3>React Exercise</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-html-language">
                    <a href="#">
                        <Link to={"/html-exercise-programming"}>
                            <img src={htmlLanguage} alt="" />
                        </Link>
                    </a>
                    <h3>HTML Exercise</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-css-language">
                    <a className="" href="">
                        <Link to={'/css-exercise-programming'}>
                            <img src={cssLanguage} alt="" />
                        </Link>
                    </a>
                    <h3>CSS Exercise</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-javascript-language">
                    <a>
                        <Link to={"/javascript-exercise-programming"}>
                            <img src={javaScript} alt="" />
                        </Link>
                    </a>
                    <h3>JavaScript Exercise</h3>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}