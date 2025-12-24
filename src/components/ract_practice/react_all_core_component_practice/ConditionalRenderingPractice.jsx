import { advance_conditional_rendering, basic_conditional_rendering, conditional_rendering_best_practices, conditional_rendering_with_multiple_conditions } from "../react-conditional-rendering-all-type-practice/ReactConditionalRenderingAllTypePractice";
import { ReactCoreFundamentalProgrammingPractice } from "./ReactCoreFundamentalProgrammingPractice";



export default function ConditionalRenderingPractice(){
return(<>
    <ReactCoreFundamentalProgrammingPractice headingName={'BASIC CONDITIONAL RENDERING'} practice_question={basic_conditional_rendering}></ReactCoreFundamentalProgrammingPractice>
    <ReactCoreFundamentalProgrammingPractice headingName={'ADVANCE RENDERING'} practice_question={advance_conditional_rendering}></ReactCoreFundamentalProgrammingPractice>
    <ReactCoreFundamentalProgrammingPractice headingName={'RENDERING MULTIPLE CONDITION'} practice_question={conditional_rendering_with_multiple_conditions}></ReactCoreFundamentalProgrammingPractice>
    <ReactCoreFundamentalProgrammingPractice headingName={'BEST PRACTICE'} practice_question={conditional_rendering_best_practices}></ReactCoreFundamentalProgrammingPractice>
</>)
}