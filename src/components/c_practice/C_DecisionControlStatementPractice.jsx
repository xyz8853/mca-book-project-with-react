import Navbar from "../navbar/Navbar";
import { advanced_conceptual_questions, basic_understanding_practice, conditional_expressions_and_operators, error_handling_and_debugging, practical_application_and_scenarios } from "./c_all_decision_statement_practice";
import { C_ProgrammingPractice } from "./C_ProgrammingPractice";


export default function C_DecisionControlStatementPractice(){
    return(
        <>
            <Navbar></Navbar>
            <C_ProgrammingPractice headingName="BASIC UNDERSTANDING" practice_question={basic_understanding_practice}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="CONDITIONAL EXPRESSIONS" practice_question={conditional_expressions_and_operators}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="PRACTICAL APPLICATION" practice_question={practical_application_and_scenarios}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="ADVANCED & CONCEPTUAL" practice_question={advanced_conceptual_questions}></C_ProgrammingPractice>
            <C_ProgrammingPractice headingName="ERROR HANDLING" practice_question={error_handling_and_debugging}></C_ProgrammingPractice>
        </>
    )
}