
import { form_input_tag_advance_concept, fundational_concept, intermediate_concept, practice_exercise } from "../html-all-topics-practice-que/FormAndInputTagPracticeQues";
import { HtmlAllPracticeHeadingUi } from "./HtmlAllPracticeHeadingUi";


export default function FormAndInputPractice(){
return(
<>
    <HtmlAllPracticeHeadingUi headingName={'FUNDATIONAL CONCEPT'} practice_question={fundational_concept}></HtmlAllPracticeHeadingUi>
    <HtmlAllPracticeHeadingUi headingName={'PRACTICE EXERCISE'} practice_question={practice_exercise}></HtmlAllPracticeHeadingUi>
    <HtmlAllPracticeHeadingUi headingName={'iNTERMEDIATE PRACTICE'} practice_question={intermediate_concept}></HtmlAllPracticeHeadingUi>
    <HtmlAllPracticeHeadingUi headingName={'ADVANCE PRACTICE'} practice_question={form_input_tag_advance_concept}></HtmlAllPracticeHeadingUi>
</>
)
}