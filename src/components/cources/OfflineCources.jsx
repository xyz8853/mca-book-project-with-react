import htmlLanguage from "../../img/html-language.jpg";
import springBootLag from "../../img/springboot-language.png";
import javaScriptLag from "../../img/javascript-language.png";
import { all_offline_courses_lang } from "./all_offline_courses_lang";
import { Link } from "react-router-dom";

export default function OfflineCources(){
    return(
        <section className="offline-cources online-head mt-3" style={{marginBottom:"50px"}}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        <div className="offline-cource-head text-center">
                            <h3 className="text-white">Offline Cources</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    {
                        all_offline_courses_lang.map((courses, index)=>{
                        return(
                        <div className="col-lg-3 col-md-3 col-sm-6 mb-3">
                            <div className="c-language">
                                <div className="card">
                                    {/* <img src={htmlLanguage} className="card-img-top" alt="..."/> */}
                                    {courses.img}
                                    <div className="card-body">
                                        <h5 className="card-title">{courses.courseName}</h5>
                                        
                                        <div className="text-center mt-5">
                                            <Link className="text-center" to={courses.url}>Apply</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        )
                        })
                    }
                  
                </div>
            </div>
        </section>
    )
}