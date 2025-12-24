import BasicProgramm from "./BasicProgramm";
import C_Variable from "./C_Variable";
import CompilerAndPreprocessor from "./CompilerAndPreprocessor";
import Data_Type from "./Data_Type";
import Decision_Controll_Statement from "./Decision_Controll_Statement";
import DynamicMemoryAllocation from "./DynamicMemoryAllocation";
import EscapeSequence from "./EscapeSequence";
import Exit from "./ExitMethod";
import FileHandling from "./FileHandling";
import GotoLabel from "./GotoLabel";
import Important_In_C from "./Important_In_C";
import Introduction_To_C from "./Introduction_To_C";
import IntroductionToArray from "./IntroductionToArray";
import Looping_Controll_Statement from "./Looping_Controll_Statement";
import Macros from "./Macros";
import Operators from "./Operators";
import ParameterAndReturnType from "./ParameterAndReturnType";
import Pointer from "./Pointer";
import PredefineFunction from "./PredefineFunction";
import Printf_Scanf_Function from "./Printf_Scanf_Function";
import Qualifier from "./Qualifier";
import ReturnStatement from "./ReturnStatement";
import ScopeResolution from "./ScopeResolution";
import StorageClass from "./StorageClass";
import StructureAndUnion from "./StructureAndUnion";
import Token from "./Token";
import UserDefineFunction from "./UserDefineFunction";



let cSyllabus = [
    {
        name:"Introduction to C",
        content:<Introduction_To_C></Introduction_To_C>
    },
    {
        name:"Data Type",
        content:<Data_Type></Data_Type>
    },
    {
        name:"C Variable",
        content:<C_Variable></C_Variable>
    },
    {
        name:"Compiler & Preprocessor",
        content:<CompilerAndPreprocessor></CompilerAndPreprocessor>
    },
    {
        name:"Some predefine function",
        content:<PredefineFunction></PredefineFunction>
    },
    {
        name:"Printf And Scanf Function",
        content:<Printf_Scanf_Function></Printf_Scanf_Function>
    },
    {
        name:"Qualifier Data Type",
        content:<Qualifier></Qualifier>
    },
    {
        name:"Escape-Sequence in C",
        content:<EscapeSequence></EscapeSequence>
    },
    {
        name:"Token in C",
        content:<Token></Token>
    },
    {
        name:"Operator in C",
        content:<Operators></Operators>
    },
    {
        name:"Basic program",
        content:<BasicProgramm></BasicProgramm>
    },
    {
        name:"Decision Controll Statement",
        content:<Decision_Controll_Statement></Decision_Controll_Statement>
    },
    {
        name:"Looping Statement",
        content:<Looping_Controll_Statement></Looping_Controll_Statement>
    },
    {
        name:"Goto label",
        content:<GotoLabel></GotoLabel>
    },
    {
        name:"Introduction to Array",
        content:<IntroductionToArray></IntroductionToArray>
    },
    {
        name:'User define function in C',
        content:<UserDefineFunction></UserDefineFunction>
    },
    {
        name:"Parameter And Return-Type",
        content:<ParameterAndReturnType></ParameterAndReturnType>
    },
    {
        name:"Storage Class in C",
        content:<StorageClass></StorageClass>
    },
    {
        name:"Structure And Union",
        content:<StructureAndUnion></StructureAndUnion>
    },
    {
        name:"Return Statement",
        content:<ReturnStatement></ReturnStatement>
    },
    {
        name:"exit(0) method in C",
        content:<Exit></Exit>
    },
    {
        name:"Macros in C",
        content:<Macros></Macros>
    },
    {
        name:"FileHandling in C",
        content:<FileHandling></FileHandling>
    },
    {
        name:"Dynamic Memory Allocation",
        content:<DynamicMemoryAllocation></DynamicMemoryAllocation>
    },
    {
        name:"Pointer in C",
        content:<Pointer></Pointer>
    },
    {
        name:"Scope-Resulation in C",
        content:<ScopeResolution></ScopeResolution>
    },
    {
        name:'Important note in C',
        content:<Important_In_C></Important_In_C>
    }
]
  
    export default cSyllabus;