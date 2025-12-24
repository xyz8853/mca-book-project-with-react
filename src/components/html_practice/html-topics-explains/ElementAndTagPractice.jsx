import Navbar from "../../navbar/Navbar";
import { adding_media_and_link, advance_concept, basic_concept_of_element_tag, form_and_input, semantic_html, structuring_content } from "../html-all-topics-practice-que/elementAndTagQues";
import { HtmlAllPracticeHeadingUi } from "./HtmlAllPracticeHeadingUi";


export default function ElementAndTagPractice(){
return(<>
     <Navbar></Navbar>
     <HtmlAllPracticeHeadingUi headingName={'BASIC CONCEPT OF ELEMENTS'} practice_question={basic_concept_of_element_tag}></HtmlAllPracticeHeadingUi>
     <HtmlAllPracticeHeadingUi headingName={'STRUCTURING CONTENT'} practice_question={structuring_content}></HtmlAllPracticeHeadingUi>
     <HtmlAllPracticeHeadingUi headingName={'ADDING MEDIA AND LINK'} practice_question={adding_media_and_link}></HtmlAllPracticeHeadingUi>
     <HtmlAllPracticeHeadingUi headingName={'FORM AND INPUT'} practice_question={form_and_input}></HtmlAllPracticeHeadingUi>
     <HtmlAllPracticeHeadingUi headingName={'SEMANTIC HTML'} practice_question={semantic_html}></HtmlAllPracticeHeadingUi>
     <HtmlAllPracticeHeadingUi headingName={'ADVANCE CONCEPT'} practice_question={advance_concept}></HtmlAllPracticeHeadingUi>
</>)
}