import DataType from "../java_programming/DataType";
import Operators from "../java_programming/Operators";
import Components from "./Components";
import ConditionalStatement from "./ConditionalStatement";
import ErrorHandling from "./ErrorHandling";
import Events from "./Events";
import FormsHandling from "./FormsHandling";
import ListAndKey from "./ListAndKey";
import PropsAndState from "./PropsAndState";
import ReactES6 from "./ReactES6";
import ReactHooks from "./ReactHooks";
import ReactIntroduction from "./ReactIntroduction";
import Redux from "./Redux";
import StateManagement from "./StateManagement";
import TodoList from "./TodoList";


let  ReactSyllabus =[
    {
        name:'React Introduction',
        content:<ReactIntroduction></ReactIntroduction>
    },
    {
        name:'Operators',
        content:<Operators></Operators>
    },
    {
        name:'Data Type',
        content:<DataType></DataType>
    },
    {
        name:'Conditional Statement',
        content:<ConditionalStatement></ConditionalStatement>
    },
    {
        name:'Props & State',
        content:<PropsAndState></PropsAndState>
    },
    {
        name:'Event Handling',
        content:<Events></Events>
    },
    {
        name:'Components',
        content:<Components></Components>
    },
    {
        name:'List & Key',
        content:<ListAndKey></ListAndKey>
    },
    {
        name:'Form Handling',
        content:<FormsHandling></FormsHandling>
    },
    {
        name:'Todo List',
        content:<TodoList></TodoList>
    },
    {
        name:'React Hooks',
        content:<ReactHooks></ReactHooks>
    },
    {
        name:'State Management',
        content:<StateManagement></StateManagement>
    },
    {
        name:'Redux',
        content:<Redux></Redux>
    },
    {
        name:'Error Handling',
        content:<ErrorHandling></ErrorHandling>
    },
    {
        name:'React ES6',
        content:<ReactES6></ReactES6>
    }
]

export default ReactSyllabus;