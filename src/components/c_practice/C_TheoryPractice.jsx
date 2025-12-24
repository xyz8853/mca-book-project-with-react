import Navbar from "../navbar/Navbar"
import c_all_theory_practice from "./c_all_theory_practice"
import './c_practice.css'

export let  C_TheoryPractice = ()=>{
    return(
        <>
            <Navbar></Navbar>
            <section className="c-theory-session mt-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8 text-center">
                            <h3 className="c-top-heading">C THEORY PRACTICE</h3>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12 mt-4">
                            <div className="multiple-questions">
                                {
                                     c_all_theory_practice.map((question, number)=>{
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
