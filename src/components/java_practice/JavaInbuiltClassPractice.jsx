import java_inbuilt_class_questions from "./java_inbuilt_class_questions";
import Navbar from "../navbar/Navbar";
import Java_ProgrammingPractice from "./Java_ProgrammingPractice";

function JavaInbuiltClassPractice(){
    return(
        <>
            <Navbar></Navbar>
            <Java_ProgrammingPractice headingName="JAVA INBUILD CLASSES" practice_question={java_inbuilt_class_questions}></Java_ProgrammingPractice>
        </>
    )
}

export default JavaInbuiltClassPractice;