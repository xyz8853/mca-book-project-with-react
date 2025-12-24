import c2Language from "../../img/c2-language.jpg";
import javaLanguage from "../../img/java-language.png";
import reactLanguage from "../../img/react-language.png";

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
                    <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                        <div className="c-language">
                            <div className="card">
                                <img src={c2Language} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">C LANGUAGE</h5>
                                    
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
                                <img src={javaLanguage} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">JAVA LANGUAGE</h5>
                                    
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
                                <img src={reactLanguage} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">REACT LANGUAGE</h5>
                                    
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