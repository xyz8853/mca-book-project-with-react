import { Link } from "react-router-dom"
import Navbar from "../navbar/Navbar"
import { java_practice_type } from "./java_practice_type"


export  let Java_Practice = ()=>{
    return(
        <>
            <Navbar></Navbar>
            <section className="c-practice c-section-header mt-5">
                <div className="container-fluid">
                    <div class="row justify-content-center">
                        {
                            java_practice_type.map( (type,index)=>{
                                return(
                                    <div className="col-lg-4 col-md-5 col-sm-8">
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