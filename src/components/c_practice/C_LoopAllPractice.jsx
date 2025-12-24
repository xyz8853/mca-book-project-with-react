import Navbar from "../navbar/Navbar";
import { advance_loop_practice, advance_pattern_practice, basic_loop_practice, loop_application_practice, loop_control_statement_practice, loop_tricky_practice, Miscellaneous_practice, more_complex_practice, nested_loop_practice } from "./c_all_loop_practice";
import { C_ProgrammingPractice } from "./C_ProgrammingPractice";


export default function C_LoopAllPractice(){
    return(
        <>
            <Navbar></Navbar>
            <C_ProgrammingPractice headingName="BASIC LOOP" practice_question={basic_loop_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="NESTED LOOPS" practice_question={nested_loop_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="LOOP CONTROL STATEMENT" practice_question={loop_control_statement_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="LOOP APPLICATION" practice_question={loop_application_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="ADVANCE LOOP CONCEPT" practice_question={advance_loop_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="TRICKY LOOP" practice_question={loop_tricky_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="MORE COMPLEX" practice_question={more_complex_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="PATTERN PRINTING" practice_question={advance_pattern_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="MISCELLANEOUS" practice_question={Miscellaneous_practice}></C_ProgrammingPractice>
        </>
    )
}