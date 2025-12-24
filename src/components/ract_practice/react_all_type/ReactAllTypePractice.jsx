
import { Link } from "react-router-dom";

import { react_all_type_practice } from "./react_all_type_practice";
import Navbar from "../../navbar/Navbar";


function ReactAllTypePractice(){
    return(
    <>
    <Navbar></Navbar>
    <section className="c-theory-session mt-5">
        <div className="container-fluid">
            <div className="row justify-content-center">
                {
                    react_all_type_practice.map( (type, index)=>{
                    return(
                    <div className="col-lg-4 col-md-5 col-sm-7">
                        <div className="theory-type practice theory-practice">
                            <h4 className="theory-name">{type.practiceName}</h4>
                            <div className='px-3'>
                                <p className="theory-content">{type.content}</p>
                                <div className='btn-work'>
                                    <button className='view-btn'>view!</button>
                                    <Link to={type.url}><button className='start-btn'>start</button></Link>
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
    </>
    )
}

export default ReactAllTypePractice;