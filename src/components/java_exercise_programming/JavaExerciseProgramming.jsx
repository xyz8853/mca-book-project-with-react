import { useState } from "react";
import JavaExerciseTopic from "./JavaExerciseTopic";
import Navbar from "../navbar/Navbar";

export default function JavaExerciseProgramming(){

    let [activeHeading, setActiveHeading] = useState(0);
    let [content, setContent] =  useState(JavaExerciseTopic[0]);
    let [indexValue, setIndexValue] = useState(0);

    return(
    <>
        <Navbar></Navbar>
        <section className="c-language-section mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-12 heading-list-col">
                        <div className="c-language-headings">
                            <ul className="heading-list">
                                {
                                    JavaExerciseTopic.map( (headingName, index)=>{
                                        return <li key={index} onClick={()=>changeContent(index)} className={(activeHeading==index)? 'active-heading' : ''}>{headingName.name}</li>
                                    })
                                }                                     
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 text-content">
                        <h2 className="active-content-heading">{content.name}</h2>
                        <div className="change-heading-div">  
                            {
                                (activeHeading==0)?
                                    ""
                                    :
                                <button className="previous-button" onClick={()=>previousHeading()}><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> previous</button>
                                
                            }
                            {
                                (activeHeading == JavaExerciseTopic.length-1)?
                                ""
                                :
                                <button className="next-button" onClick={()=>nextHeading()}>
                                    next <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                </button>   
                            }
                            
                        </div>
                        <div className="mt-5">
                            {(content !==undefined)?
                                content.content :
                                ""
                            }
                        </div>
                    </div>
                    <div className="col-sm-12">

                    </div>
                </div>
            </div>
    </section>
    </>
    )
}