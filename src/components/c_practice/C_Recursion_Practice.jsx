import Navbar from "../navbar/Navbar";
import { C_ProgrammingPractice } from "./C_ProgrammingPractice";
import { array_and_string_manipulation_practice, data_structure_practice, fundamental_recursive_practice } from "./c_recursion_function_practice";


export default function C_Recursion_Practice(){
    return(
        <>
            <Navbar></Navbar>
            <C_ProgrammingPractice headingName="FUNDAMENTAL RECURSION" practice_question={fundamental_recursive_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="ARRAY AND STRING RECURSION" practice_question={array_and_string_manipulation_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="DATA STRUCTURE RECURSION" practice_question={data_structure_practice}></C_ProgrammingPractice>
        </>
    )
}