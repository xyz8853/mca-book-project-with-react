import Navbar from "../../navbar/Navbar";
import { coding_challenges } from "../html-all-topics-practice-que/TableTagPracticeQues";
import { HtmlAllPracticeHeadingUi } from "./HtmlAllPracticeHeadingUi";



export default function TableTagPractice(){
return(<>
    <Navbar></Navbar>
    <HtmlAllPracticeHeadingUi headingName={'TABLE TAG PRACTICE'} practice_question={coding_challenges}></HtmlAllPracticeHeadingUi>
</>)
}