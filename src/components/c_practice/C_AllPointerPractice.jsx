import Navbar from "../navbar/Navbar";
import { advance_pointer_concept_practice, basic_pointer_practice, error_handling_debugging_practice, miscellaneous_practice, pointer_and_array_practice, pointer_and_string_practice, pointer_arithmetic_practice, pointer_to_pointer_practice, pointer_with_memory_allocation, pointer_with_structure_and_union_practice, poiter_and_function_practice, problem_solving_with_pointer_practice } from "./c_all_pointer_practice";
import { C_ProgrammingPractice } from "./C_ProgrammingPractice";


export default function C_AllPointerPractice(){
    return(
        <>
            <Navbar></Navbar>
            <C_ProgrammingPractice headingName="BASIC POINTER" practice_question={basic_pointer_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="POINTER WITH ARITHMETIC" practice_question={pointer_arithmetic_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="POINTER AND ARRAY" practice_question={pointer_and_array_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="POINTER AND STRING" practice_question={pointer_and_string_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="POINTER AND FUNCTION" practice_question={poiter_and_function_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="POINTER WITH MEMORY ALLOCATION" practice_question={pointer_with_memory_allocation}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="POINTER TO POINTER" practice_question={pointer_to_pointer_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="POINTER TO STRUCTURE AND UNION" practice_question={pointer_with_structure_and_union_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="ADVANCE POINTER CONCEPT" practice_question={advance_pointer_concept_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="PRACTICE WITH POINTER" practice_question={problem_solving_with_pointer_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="ERROR HANDLING WITH POINTER" practice_question={error_handling_debugging_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="MISCELLANEOUS PRACTICE" practice_question={miscellaneous_practice}></C_ProgrammingPractice>
        </>
    )
}