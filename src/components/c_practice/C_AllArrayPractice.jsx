import Navbar from "../navbar/Navbar";
import { advance_array_problem, array_pointer_practice, basic_array_practice, multi_dimentional_practice, one_dimentional_practice, string_array_practice } from "./c_all_array_practice";
import { C_ProgrammingPractice } from "./C_ProgrammingPractice";


export default function C_AllArrayPractice(){
    return(
        <>
            <Navbar></Navbar>
            <C_ProgrammingPractice headingName="BASIC ARRAY" practice_question={basic_array_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="SINGLE DIMENTIONAL ARRAY" practice_question={one_dimentional_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="MULTI DIMENTIONAL ARRAY" practice_question={multi_dimentional_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="ARRAY AND POINTER" practice_question={array_pointer_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="STRING ARRAY" practice_question={string_array_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="ADVANCE ARRAY" practice_question={advance_array_problem}></C_ProgrammingPractice>
            
        </>
    )
}