import Navbar from "../../navbar/Navbar";
import { Advanced_jSX_concepts, basic_understanding_of_jSX,
         jsx_and_components_practice, 
         jsx_syntax_and_feature_practice } from "../react_jsx_all_type_question/ReactJSX_RelatedAllQuestion";
import { ReactCoreFundamentalProgrammingPractice } from "./ReactCoreFundamentalProgrammingPractice";



export default function React_JSX_Practice(){
     return(
        <>
            <Navbar></Navbar>
            <ReactCoreFundamentalProgrammingPractice headingName={"BASIC UNDERSTANDING OF JSX"} practice_question={basic_understanding_of_jSX}></ReactCoreFundamentalProgrammingPractice>
            <ReactCoreFundamentalProgrammingPractice headingName={'JSX SYNTAX AND FEATURES'} practice_question={jsx_syntax_and_feature_practice}></ReactCoreFundamentalProgrammingPractice>
            <ReactCoreFundamentalProgrammingPractice headingName='JSX COMPONENTS' practice_question={jsx_and_components_practice}></ReactCoreFundamentalProgrammingPractice>
            <ReactCoreFundamentalProgrammingPractice headingName={'ADVANCE JSX CONCEPT'} practice_question={Advanced_jSX_concepts}></ReactCoreFundamentalProgrammingPractice>
        </>
    )
}