import Navbar from "../../navbar/Navbar";
import { virtual_dom_comparison_and_advanced_topics, virtual_dom_detailed_mechanisms, virtual_dom_fundamental_concept_practice } from "../virtual-dom-all-type-practice/VirtualDomAllTypePractice";
import { ReactCoreFundamentalProgrammingPractice } from "./ReactCoreFundamentalProgrammingPractice";



export default function ReactVirtualDomPractice(){
return(<>
    <Navbar></Navbar>
    <ReactCoreFundamentalProgrammingPractice headingName={"VIRTUAL DOM FUNDAMENTAL"} practice_question={virtual_dom_fundamental_concept_practice}></ReactCoreFundamentalProgrammingPractice>
    <ReactCoreFundamentalProgrammingPractice headingName={'VIRTUAL DOM DETAILS'} practice_question={virtual_dom_detailed_mechanisms}></ReactCoreFundamentalProgrammingPractice>
    <ReactCoreFundamentalProgrammingPractice headingName={'VIRTUAL DOM COMPARISON'} practice_question={virtual_dom_comparison_and_advanced_topics}></ReactCoreFundamentalProgrammingPractice>
</>)
}

