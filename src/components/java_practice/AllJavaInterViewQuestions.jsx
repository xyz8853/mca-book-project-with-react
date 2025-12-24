import Navbar from "../navbar/Navbar";
import AllJavaTheory from "./AllJavaTheory";
import Java_ProgrammingPractice from "./Java_ProgrammingPractice";

function AllJavaInterViewQuestion(){
    return(
        <>
           <Navbar></Navbar>
           <Java_ProgrammingPractice headingName={"ALL IMPORTANT QUESTION"} practice_question={AllJavaTheory}></Java_ProgrammingPractice>
        </>
    )
}

export default AllJavaInterViewQuestion;