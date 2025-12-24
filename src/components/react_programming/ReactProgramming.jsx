



import { useState } from "react";
import Navbar from "../navbar/Navbar";
import ReactSyllabus from './ReactSyllabus';
import { FooterBarFirst } from "../footer_bar/FooterBarFirst";
import FooterBarSecond from "../footer_bar/FooterBarSecond";

export default function ReactProgramming(){

    let [activeHeading, setActiveHeading] = useState(0);
    let [content, setContent] = useState(ReactSyllabus[0]);
    let [indexValue, setIndexValue]  =  useState(0);

    let changeContent = (index)=>{
        setActiveHeading(index);
        setContent(ReactSyllabus[index]);
        setIndexValue(index);
    }

    let previousHeading = ()=>{
        let index = indexValue;
        if(index != 0){
            index -=1;
            setActiveHeading(index);
            setContent(ReactSyllabus[index]);
            setIndexValue(index);
            
        }
    }

    let nextHeading = ()=>{
        let index = indexValue;
        if(ReactSyllabus.length-1>index){
            index += 1;
            setIndexValue(index);
            setActiveHeading(index);
            setContent(ReactSyllabus[index]);
        }
    }

    return(
        <>
           <Navbar></Navbar>
           <section className="c-language-section mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 co-md-4 col-sm-12 heading-list-col">
                            <div className="c-language-headings">
                                <ul className="heading-list">
                                    {
                                        ReactSyllabus.map( (headingName, index)=>{
                                            return <li onClick={()=>changeContent(index)} key={index} className={(activeHeading==index)? 'active-heading' : ''}>{headingName.name}</li>
                                        })
                                    }                                     
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-10 text-content">
                            <h2 className="active-content-heading">{ReactSyllabus[activeHeading].name}</h2>
                            <div className="change-heading-div">
                                
                                {
                                    (activeHeading==0)?
                                     ""
                                      :
                                    <button className="previous-button" onClick={()=>previousHeading()}><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> previous</button>
                                    
                                }
                                {
                                    (activeHeading == ReactSyllabus.length-1)?
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
           <FooterBarSecond></FooterBarSecond>
           <FooterBarFirst></FooterBarFirst>
        </>
    )
}