import Navbar from "../../navbar/Navbar";
import { advanced_concepts, 
        conceptual_understanding, 
        practical_application } from "../react_props_all_type_question/ReactPropsAllTypePractice";
import { ReactCoreFundamentalProgrammingPractice } from "./ReactCoreFundamentalProgrammingPractice";


export default function ReactPropsAllPractice(){
    return(
        <>
            <Navbar></Navbar>
            <ReactCoreFundamentalProgrammingPractice headingName={'CONCEPTUAL UNDERSTANDING'} practice_question={conceptual_understanding}></ReactCoreFundamentalProgrammingPractice>
            <ReactCoreFundamentalProgrammingPractice headingName={'PRACTICAL APPLICATION'} practice_question={practical_application}></ReactCoreFundamentalProgrammingPractice>
            <ReactCoreFundamentalProgrammingPractice headingName={'ADVANCE CONCEPT'} practice_question={advanced_concepts}></ReactCoreFundamentalProgrammingPractice>
        </>
    )
}