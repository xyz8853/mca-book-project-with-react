import Navbar from "../../navbar/Navbar";
import { advance_consideration, css_manipulation, element_clasification, fundamental_concept_of_block_inline_element } from "../html-all-topics-practice-que/block_inline_element";
import { HtmlAllPracticeHeadingUi } from "./HtmlAllPracticeHeadingUi";



export default function BlockAndInlineElementsPractice(){
return(<>
        <Navbar></Navbar>
        <HtmlAllPracticeHeadingUi headingName={'BLOCK AND INLINE ELEMENTS'} practice_question={fundamental_concept_of_block_inline_element}></HtmlAllPracticeHeadingUi>
        <HtmlAllPracticeHeadingUi headingName={'ELEMENTS CLASIFICATION'} practice_question={element_clasification}></HtmlAllPracticeHeadingUi>
        <HtmlAllPracticeHeadingUi headingName={'CSS MANIPULATION'} practice_question={css_manipulation}></HtmlAllPracticeHeadingUi>
        <HtmlAllPracticeHeadingUi headingName={'ADVANCE CONSIDERATION'} practice_question={advance_consideration}></HtmlAllPracticeHeadingUi>
</>)
}