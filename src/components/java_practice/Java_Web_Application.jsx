import Navbar from "../navbar/Navbar";
import Java_ProgrammingPractice from "./Java_ProgrammingPractice";
import { core_concept, enterprise_java, modern_practices, web_technologies } from "./java_web_application_all_practice";



export function Java_Web_Application(){
    return(
        <>
            <Navbar></Navbar>
            <Java_ProgrammingPractice headingName={"CORE WEB"} practice_question={core_concept}></Java_ProgrammingPractice>
            <Java_ProgrammingPractice headingName={"WEB TECHNOLOGY"} practice_question={web_technologies}></Java_ProgrammingPractice>
            <Java_ProgrammingPractice headingName={"ENTERPRISE JAVA"} practice_question={enterprise_java}></Java_ProgrammingPractice>
            <Java_ProgrammingPractice headingName={"MORDERN PRACTICE"} practice_question={modern_practices}></Java_ProgrammingPractice>
        </>
    )
}