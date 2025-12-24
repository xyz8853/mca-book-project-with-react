

import Navbar from '../navbar/Navbar';
import { java_all_pattern_practice} from './java_all_pattern_practice';


function JavaPatternPractice(){
    return(
        <>
             <Navbar></Navbar>
             <section className="c-theory-session mt-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8 text-center">
                            <h3 className="c-top-heading">JAVA PATTERN PRACTICE</h3>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12 mt-4">
                            <div className="multiple-questions text-center">
                                {
                                     java_all_pattern_practice.map((question, number)=>{
                                        return(
                                            <>
                                                <img className='img-fluid' src={question} alt="" />
                                                <br/>
                                                <hr style={{color:'red',backgroundColor:'red',height:'20px'}} />
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

export default JavaPatternPractice;