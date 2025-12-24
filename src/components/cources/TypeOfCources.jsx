
import { Link } from "react-router-dom";
import c1Language from "../../img/c-language.jpg";
import javaLanguage from "../../img/java2-language.jpg";
import reactLanguage from "../../img/react2-language.png";
import htmlLanguage from "../../img/html6.jpg";
import cssLanguage from "../../img/css4.jpg";
import javaScript from "../../img/js3.jpg"

export default function TypeOfCources() {
  return (
    <>
      <section className="type-cources-all mt-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-c-language">
                    <a href="#">
                        <Link to={"/c-programming"}>
                            <img src={c1Language} alt="" />
                        </Link>
                    </a>
                    <h3>C Language</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-java-language">
                    <a className="" href="">
                        <Link to={'/java-programming'}>
                            <img src={javaLanguage} alt="" />
                        </Link>
                    </a>
                    <h3>Java Language</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-react-language">
                    <a>
                        <Link to={"/react-programming"}>
                            <img src={reactLanguage} alt="" />
                        </Link>
                    </a>
                    <h3>React Language</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-html-language">
                    <a href="#">
                        <Link to={"/html-programming"}>
                            <img src={htmlLanguage} alt="" />
                        </Link>
                    </a>
                    <h3>HTML Language</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-css-language">
                    <a className="" href="">
                        <Link to={'/css-programming'}>
                            <img src={cssLanguage} alt="" />
                        </Link>
                    </a>
                    <h3>CSS Language</h3>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="type-javascript-language">
                    <a>
                        <Link to={"/javascript-programming"}>
                            <img src={javaScript} alt="" />
                        </Link>
                    </a>
                    <h3>JavaScript</h3>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
