import JsArrays from "./JsArrays";
import JsBlock from "./JsBlock";
import JsComments from "./JsComments";
import JsDecisionControlStatement from "./JsDecisionControlStatement";
import JsErrors from "./JsErrors";
import JsES6 from "./JsES6";
import JsEvents from "./JsEvents";
import JsFunctions from "./JsFunctions";
import JSIntroduction from "./JSIntroduction";
import JsLoopingStatement from "./JsLoopingStatement";
import JsObjects from "./JsObjects";
import JsOperators from "./JsOperators";
import JsOutput from "./JsOutput";
import JsScope from "./JsScope";
import JsStatements from "./JsStatements";
import JsString from "./JsString";
import JsSyntax from "./JsSyntax";
import JsVariables from "./JsVariables";


let JavaScriptSyllabus =[
    {
        name:'JS Introduction',
        content:<JSIntroduction></JSIntroduction>
    },
    {
        name:'JS Output',
        content:<JsOutput></JsOutput>
    },
    {
        name:'JS Statements',
        content:<JsStatements></JsStatements>
    },

    {
        name:'JS Syntax',
        content:<JsSyntax></JsSyntax>
    },
    {
        name:'JS Comments',
        content:<JsComments></JsComments>
    },
    {
        name:'JS Variables',
        content:<JsVariables></JsVariables>
    },
    {
        name:'JS Operators',
        content:<JsOperators></JsOperators>
    },
    {
        name:'JS Functions',
        content:<JsFunctions></JsFunctions>
    },
    {
        name:'JS Objects',
        content:<JsObjects></JsObjects>
    },
    {
        name:'JS Events',
        content:<JsEvents></JsEvents>
    },
    {
        name:'JS String',
        content:<JsString></JsString>
    },

    {
        name:'JS Arrays',
        content:<JsArrays></JsArrays>
    },
    {
        name:'JS Decision Statements',
        content:<JsDecisionControlStatement></JsDecisionControlStatement>
    },
    {
        name:'JS Loops',
        content:<JsLoopingStatement></JsLoopingStatement>
    },
    {
        name:'JS Loop Statements',
        content:<JsLoopingStatement></JsLoopingStatement>
    },{
        name:'JS Errors',
        content:<JsErrors></JsErrors>
    },
    {
        name:'JS Scope',
        content:<JsScope></JsScope>
    },
    {
        name:'JS Blocks',
        contents:<JsBlock></JsBlock>
    },
    {
        name:'JS ES6',
        content:<JsES6></JsES6>
    }
]

export default JavaScriptSyllabus;