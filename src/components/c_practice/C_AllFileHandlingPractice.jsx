import Navbar from "../navbar/Navbar";
import { advance_handling_practice, error_handling_practice, file_handling_practice, input_output_handling_practice, memory_handling_practice, other_handling_practice, string_handling_practice } from "./c_all_fileHandling_practice";
import { C_ProgrammingPractice } from "./C_ProgrammingPractice";


export default function C_AllFileHandlingPractice(){
    return(
        <>
            <Navbar></Navbar>
            <C_ProgrammingPractice headingName="INPUT OUTPUT HANDLING" practice_question={input_output_handling_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="ERROR HANDLING" practice_question={error_handling_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="STRING HANDLING" practice_question={string_handling_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="FILE HANDLING" practice_question={file_handling_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="MEMORY HANDLING" practice_question={memory_handling_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="OTHER HANDLING" practice_question={other_handling_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="ADVANCE HANDLING" practice_question={advance_handling_practice}></C_ProgrammingPractice>
        </>
    )
}