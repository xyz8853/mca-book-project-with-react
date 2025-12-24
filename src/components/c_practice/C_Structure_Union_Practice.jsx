import Navbar from "../navbar/Navbar";
import { C_ProgrammingPractice } from "./C_ProgrammingPractice";
import { advance_programming_practice, array_of_struct_union_practice, basic_concept_struct_union_practice, function_struct_union, initialize_assignment_practice, memory_size_allocation_practice, nested_struct_union_practice, pointer_and_dynamic_memory_allocation_practice, theoretical_practice, typedef_struct_union } from "./c_structure_and_union_practice";


export default function C_Structure_Union_Practice(){
    return(
        <>
            <Navbar></Navbar>
            <C_ProgrammingPractice headingName="BASIC CONCEPT" practice_question={basic_concept_struct_union_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="MEMORY ALLOCATION AND SIZE" practice_question={memory_size_allocation_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="INITIALIZE AND ASSIGNMENT" practice_question={initialize_assignment_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="POINTER AND DYNAMIC MEMORY ALLOCATION" practice_question={pointer_and_dynamic_memory_allocation_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="ARRAY OF STRUCT AND UNION" practice_question={array_of_struct_union_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="NESTED STRUCT AND UNION" practice_question={nested_struct_union_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="FUNCTION STRUCT AND UNION" practice_question={function_struct_union}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="TYPEDEF STRUCT AND UNION" practice_question={typedef_struct_union}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="ADVANCE STRUCT AND UNION" practice_question={advance_programming_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="THEORETICAL STRUCT AND UNION" practice_question={theoretical_practice}></C_ProgrammingPractice>
            
        </>
    )
}