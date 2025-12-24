
import Navbar from "../navbar/Navbar";
import { lambda_expression_functional_interface, optional_class, stream_api } from "./java_8_all_feature";
import Java_ProgrammingPractice from "./Java_ProgrammingPractice";

export let  Java8FeaturePractice = ()=>{
      return(
        <>
            <Navbar></Navbar>
            <Java_ProgrammingPractice headingName={"Lambda Expression"} practice_question={lambda_expression_functional_interface}></Java_ProgrammingPractice>
            <Java_ProgrammingPractice headingName={"Stream API"} practice_question={stream_api}></Java_ProgrammingPractice>
            <Java_ProgrammingPractice headingName={"Optional Class"} practice_question={optional_class}></Java_ProgrammingPractice>
        </>
    )
}