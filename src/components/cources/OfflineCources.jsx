import htmlLanguage from "../../img/html-language.jpg";
import springBootLag from "../../img/springboot-language.png";
import javaScriptLag from "../../img/javascript-language.png";

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
                    <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                        <div className="c-language">
                            <div className="card">
                                <img src={htmlLanguage} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">HTML LANGUAGE</h5>
                                    
                                    <div className="text-center mt-5">
                                        <a href="#" className="text-center">Apply</a>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                        <div className="java-language">
                        <div className="card">
                                <img src={springBootLag} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">SPRING BOOT</h5>
                                    
                                    <div className="text-center mt-5">
                                        <a href="#" className="text-center">Apply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                        <div className="react-language">
                        <div className="card">
                                <img src={javaScriptLag} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">JAVA SCRIPT</h5>
                                    
                                    <div className="text-center mt-5">
                                        <a href="#" className="text-center">Apply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}