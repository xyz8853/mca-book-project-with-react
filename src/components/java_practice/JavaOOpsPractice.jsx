import Navbar from "../navbar/Navbar";
import java_oops_questions from "./java_oops_questions";


function JavaOOpsPractice(){
    return(
        <>
            <Navbar></Navbar> 
            <section className="c-theory-session mt-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8 text-center">
                            <h3 className="c-top-heading">JAVA OOP'S PRACTICE</h3>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12 mt-4">
                            <div className="multiple-questions">
                                {
                                     java_oops_questions.map((question, number)=>{
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

export default JavaOOpsPractice;