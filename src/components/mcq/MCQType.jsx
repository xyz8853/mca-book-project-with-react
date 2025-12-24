
import { Link } from "react-router-dom";
import c1Language from "../../img/c-language.jpg";
import javaLanguage from "../../img/java2-language.jpg";
import reactLanguage from "../../img/react2-language.png";
import htmlLanguage from "../../img/html6.jpg";
import cssLanguage from "../../img/css4.jpg";
import javaScript from "../../img/js3.jpg"



export default function MCQType(){
    return(
        <>
     <section className="type-mcq-all-language">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-c-language">
                    <a href="#">
                        <Link to={"/c-mcq-programming"}>
                            <img src={c1Language} alt="" />
                        </Link>
                    </a>
                    <h3>C MCQ</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-java-language">
                    <a className="" href="">
                        <Link to={'/java-mcq-programming'}>
                            <img src={javaLanguage} alt="" />
                        </Link>
                    </a>
                    <h3>Java MCQ</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-react-language">
                    <a>
                        <Link to={"/react-mcq-programming"}>
                            <img src={reactLanguage} alt="" />
                        </Link>
                    </a>
                    <h3>React MCQ</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-html-language">
                    <a href="#">
                        <Link to={"/html-mcq-programming"}>
                            <img src={htmlLanguage} alt="" />
                        </Link>
                    </a>
                    <h3>HTML MCQ</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-css-language">
                    <a className="" href="">
                        <Link to={'/css-mcq-programming'}>
                            <img src={cssLanguage} alt="" />
                        </Link>
                    </a>
                    <h3>CSS MCQ</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-javascript-language">
                    <a>
                        <Link to={"/JavaScript-mcq-progrramming"}>
                            <img src={javaScript} alt="" />
                        </Link>
                    </a>
                    <h3>JavaScript MCQ</h3>
                </div>
            </div>
          </div>
        </div>
    </section> 
    </>   
    )
}