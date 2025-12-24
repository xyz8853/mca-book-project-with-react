import Navbar from "../../navbar/Navbar";
import { element_within_body_tag, 
        element_within_head_tag, 
        html_basic_structure } from "../html-all-topics-practice-que/documentStructurePracticeQues";
import { HtmlAllPracticeHeadingUi } from "./HtmlAllPracticeHeadingUi";



export default function HtmlDocumentStructure(){
return(<>
    <Navbar></Navbar>
    <HtmlAllPracticeHeadingUi headingName={'HTML BASIC STRUCTURE'} practice_question={html_basic_structure}></HtmlAllPracticeHeadingUi>
    <HtmlAllPracticeHeadingUi headingName={'ELEMENT WITHIN HEAD TAG'} practice_question={element_within_head_tag}></HtmlAllPracticeHeadingUi>
    <HtmlAllPracticeHeadingUi headingName={'ELEMENT WITHIN BODY TAG'} practice_question={element_within_body_tag}></HtmlAllPracticeHeadingUi>
</>)
}