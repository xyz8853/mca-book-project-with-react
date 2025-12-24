import { advance_event_handling, basic_event_handling, event_bubling_and_capturing, form_events, miscellaneous, passing_data_to_event_handler } from "../react-all-type-event-handling-practice/reactEventHandlingAllType";
import { ReactCoreFundamentalProgrammingPractice } from "./ReactCoreFundamentalProgrammingPractice";



export default function ReactEventHandlingPractice(){
return(<>
    <ReactCoreFundamentalProgrammingPractice headingName={'BASIC EVENT HANDLING'} practice_question={basic_event_handling}></ReactCoreFundamentalProgrammingPractice>
    <ReactCoreFundamentalProgrammingPractice headingName={'PASSING DATA TO EVENT HANDLING'} practice_question={passing_data_to_event_handler}></ReactCoreFundamentalProgrammingPractice>
    <ReactCoreFundamentalProgrammingPractice headingName={'FORM EVENT HANDLING'} practice_question={form_events}></ReactCoreFundamentalProgrammingPractice>
    <ReactCoreFundamentalProgrammingPractice headingName={'EVENT BUBLING CAPTURING'} practice_question={event_bubling_and_capturing}></ReactCoreFundamentalProgrammingPractice>    
    <ReactCoreFundamentalProgrammingPractice headingName={'ADVANCE EVENT HANDLING'} practice_question={advance_event_handling}></ReactCoreFundamentalProgrammingPractice>
    <ReactCoreFundamentalProgrammingPractice headingName={'MISCELLANEOUS HANDLING'} practice_question={miscellaneous}></ReactCoreFundamentalProgrammingPractice>

</>)
}