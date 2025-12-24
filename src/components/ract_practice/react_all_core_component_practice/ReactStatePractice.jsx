import Navbar from "../../navbar/Navbar";
import { advance_state_concepts,
         practical_scenario, state_basic_concept_practice, 
         state_management_in_class_components, 
         state_management_in_fnctional_components } from "../react_state_all_type_practice/ReactStateAllTypePractice";
import { ReactCoreFundamentalProgrammingPractice } from "./ReactCoreFundamentalProgrammingPractice";



export default function ReactStatePractice(){
return(<>
        <Navbar></Navbar>
        <ReactCoreFundamentalProgrammingPractice headingName={"STATE BASIC CONCEPT"} practice_question={state_basic_concept_practice}></ReactCoreFundamentalProgrammingPractice>
        <ReactCoreFundamentalProgrammingPractice headingName={"STATE MANAGEMENT IN FUNCATIONAL COMPONENT"} practice_question={state_management_in_fnctional_components}></ReactCoreFundamentalProgrammingPractice>
        <ReactCoreFundamentalProgrammingPractice headingName={"STATE MANAGEMENT IN CLASS COMPONENT"} practice_question={state_management_in_class_components}></ReactCoreFundamentalProgrammingPractice>
        <ReactCoreFundamentalProgrammingPractice headingName={"STATE ADVANCE CONCEPT"} practice_question={advance_state_concepts}></ReactCoreFundamentalProgrammingPractice>
        <ReactCoreFundamentalProgrammingPractice headingName={"STATE PRACTICE SCENARIO"} practice_question={practical_scenario}></ReactCoreFundamentalProgrammingPractice>
</>)
}