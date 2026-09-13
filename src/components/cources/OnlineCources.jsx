import { Link } from "react-router-dom";
import javaLanguage from "../../img/java-language.png";
import reactLanguage from "../../img/react-language.png";
import { all_online_courses_lang } from "./all_online_courses_lang";

export default function OnlineCources(){
    return(
        <section className="online-cources online-head mt-3" style={{marginBottom:"25px"}}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        <div className="online-cources-head text-center">
                            <h3 className="text-white">Online Cources</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    {
                    all_online_courses_lang.map((courses, index)=>{
                        return(
                            <div className="col-lg-3 col-md-3 col-sm-6 mb-3">
                                <div className="c-language">
                                    <div className="card">
                                        {/* <img src={c2Language} className="card-img-top" alt="..."/> */}
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
                        )})
                    }
                </div>
            </div>
        </section>
    )
}