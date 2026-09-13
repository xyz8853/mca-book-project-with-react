
import { java_online_courses_data } from "./java_online_courses_data";
import javaLanguage from "../../img/java-language.png";
import Navbar from "../navbar/Navbar";

export default function JavaOnlineCoursesPage(){
return(
  <>
    <Navbar></Navbar>
     <section className="shifting-sedual mt-4">
          <div className="container-fluid">
              <div className="row mx-5 mb-4">
                  <div className="text-center"> 
                      <strong className="popular-classes">POPULAR CLASSES</strong>
                      <h2 className="mt-3" id="all-classes">Java Classes Schedule</h2>
                  </div>
                  {
                    java_online_courses_data.map((all_java_Online_Courses,index)=>{
                      return(
                         <div className="col-lg-4 col-md-12 col-sm-12 mb-3"> 
                        <div className="card text-center">
                          <img src={javaLanguage} className="card-img-top" alt="..."/>
                          <div className="card-body shift-body">
                            <h5 className="card-title mb-3 shift text-center" style={{color:`black`,fontWeight:`500`}}>Shift-Timing</h5>
                            <p className="card-text" style={{textAlign:`justify`}}></p>
                            <table className="table shift-table">
                                <tr className="mb-3">
                                  <td className="first-side">Class Time</td>
                                  <td>6AM - 11AM</td>
                                </tr>
                                <tr>
                                  <td className="first-side" >Total Seats</td>
                                  <td>100</td>
                                </tr>
                                <tr>
                                  <td className="first-side" >Monthly Fee</td>
                                  <td>&#8377; 400.00</td>
                                </tr>
                                <tr>
                                  <td className="first-side" >Available Seats</td>
                                  <td>30</td>
                                </tr>
                            </table>
                            <a href="#" className="btn btn-primary join-button">Join Now !</a>
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