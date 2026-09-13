import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { css_all_type_topics_heading } from "./css_all_type_topics_heading";

export let Css_Practice = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="c-theory-session mt-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            {css_all_type_topics_heading.map((type, index) => {
              return (
                <div className="col-lg-4 col-md-5 col-sm-7">
                  <div className="theory-type practice theory-practice">
                    <h4 className="theory-name">{type.practiceName}</h4>
                    <div className="px-3">
                      <p className="theory-content">{type.content}</p>
                      <div className="btn-work">
                        <button className="view-btn">view!</button>
                        <Link to={type.url}>
                          <button className="start-btn">start</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
