



import { useEffect, useState } from "react";


export let HtmlAllPracticeHeadingUi = ({headingName, practice_question})=>{
    let [allQuestion, setAllQuestion] = useState([]);

    useEffect(()=>{
        setAllQuestion(practice_question);
    })
    return(
        <>
            {/* <Navbar></Navbar> */}
            <section className="c-theory-session mt-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-10 col-sm-12 text-center">
                            <h3 className="c-top-heading">{headingName}</h3>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12 mt-4">
                            <div className="multiple-questions">
                                {
                                     practice_question.map((question, number)=>{
                                        return(
                                            <>
                                                <h6><strong className="count-total-question">{number+1}</strong> {question}</h6>
                                            </>
                                        )
                                     })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}