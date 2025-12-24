import Navbar from "../../navbar/Navbar";
import { advance_component_concept_practice, basic_component_concept, 
        component_design_and_practice, 
        component_life_cycle_hooks_practice } from "../react-components-all_type-question/ReactComponentRelatedAllQuestion";
import { ReactCoreFundamentalProgrammingPractice } from "./ReactCoreFundamentalProgrammingPractice";



export default function ReactCoreComponentsPractice(){
     return(
        <>
            <Navbar></Navbar>
            <ReactCoreFundamentalProgrammingPractice headingName={"REACT COMPONENT PRACTICE"} practice_question={basic_component_concept}></ReactCoreFundamentalProgrammingPractice>
            <ReactCoreFundamentalProgrammingPractice headingName={'REACT COMPONENT LIFE CYCLE'} practice_question={component_life_cycle_hooks_practice}></ReactCoreFundamentalProgrammingPractice>
            <ReactCoreFundamentalProgrammingPractice headingName={'REACT ADVANCE COMPONENT'} practice_question={advance_component_concept_practice}></ReactCoreFundamentalProgrammingPractice>
            <ReactCoreFundamentalProgrammingPractice headingName={'REACT COMPONENT DESIGN'} practice_question={component_design_and_practice}></ReactCoreFundamentalProgrammingPractice>
        </>
    )
}