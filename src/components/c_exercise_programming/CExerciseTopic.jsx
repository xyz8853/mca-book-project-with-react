import Basic from "./Basic";
import DataType from './DataType';
import VariableExercise from './VariableExercise';
import InputOutput from './InputOutput';
import DecisionControlStatement from './DecisionControlStatement';
import ForLoop from './ForLoop';
import WhileLoop from './WhileLoop';
import DoWhileLoop from './DoWhileLoop';
import SimpleIfExercise from './SimpleIfExercise';
import If_Else_Exercise from './If_Else_Exercise';
import Nested_If_Else_Exercise from './Nested_If_Else_Exercise';
import FunctionExercise from './FunctionExercise';
import GotoLevelExercise from './GotoLevelExercise';
import Operator from "./Operator";

let CExerciseTopic =[
    {
        name:'Basic Practice',
        content:<Basic></Basic>
    },
    {
        name:'Data Type',
        content:<DataType></DataType>
    },
    {
        name:'Variable',
        content:<VariableExercise></VariableExercise>
    },
    {
        name:'Input-Output',
        content:<InputOutput></InputOutput>
    },
    {
        name:'Operator',
        content:<Operator></Operator>
    },
    {
        name:'Decision Control Statement',
        content:<DecisionControlStatement></DecisionControlStatement>
    },
    {
        name:'For Loop Exercise',
        content:<ForLoop></ForLoop>
    },
    {
        name:'While Loop Exercise',
        content:<WhileLoop></WhileLoop>
    },
    {
        name:'Do-While Loop Exercise',
        content:<DoWhileLoop></DoWhileLoop>
    },
    {
        name:'Simple If Exercise',
        content:<SimpleIfExercise></SimpleIfExercise>
    },
    {
        name:'If-else exercise',
        content:<If_Else_Exercise></If_Else_Exercise>
    },
    {
        name:'Nested If-else exercise',
        content:<Nested_If_Else_Exercise></Nested_If_Else_Exercise>
    },
    {
        name:'Function Exercise',
        content:<FunctionExercise></FunctionExercise>
    },
    {
        name:'Goto-Level Exercise',
        content:<GotoLevelExercise></GotoLevelExercise>
    }
]

export default CExerciseTopic;