import { useState } from "react";
import Navbar from "../navbar/Navbar";
import CExerciseTopic from "./CExerciseTopic";


export default function CExerciceProgramming(){
    let [activeHeading, setActiveHeading] = useState(0);
    let [content, setContent] =  useState(CExerciseTopic[0]);
    let [indexValue, setIndexValue] = useState(0);

    let changeContent = (index)=>{
        setIndexValue(index);
        setActiveHeading(index);
        setContent(CExerciseTopic[index]);
    }

    let previousHeading = ()=>{
        let index = indexValue;
        if(index>=1){
            index -= 1;
            setIndexValue(index);
            setActiveHeading(index);
            setContent(CExerciseTopic[index]);
        }
    }

    let nextHeading = ()=>{
        let index = indexValue;
        if(index<CExerciseTopic.length-1){
            index += 1;
            setIndexValue(index);
            setActiveHeading(index);
            setContent(CExerciseTopic[index]);
        }
    }

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
                                    CExerciseTopic.map( (headingName, index)=>{
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
                                (activeHeading == CExerciseTopic.length-1)?
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