import { basic_core_concept, practical_exercise, specific_attributes } from "../html-all-topics-practice-que/attributesQues";
import { HtmlAllPracticeHeadingUi } from "./HtmlAllPracticeHeadingUi";



export default function HtmlAttributesPractice(){
return(<>
        <HtmlAllPracticeHeadingUi headingName={'BASIC CORE CONCEPT'} practice_question={basic_core_concept}></HtmlAllPracticeHeadingUi>
        <HtmlAllPracticeHeadingUi headingName={'SPECIFIC ATTRIBUTES'} practice_question={specific_attributes}></HtmlAllPracticeHeadingUi>
        <HtmlAllPracticeHeadingUi headingName={'PRACTICAL EXERCISE'} practice_question={practical_exercise}></HtmlAllPracticeHeadingUi>
    </>)
}