import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import './app.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Cources from './components/cources/Cources.jsx'
import MCQ from './components/mcq/MCQ.jsx'
import Exercise from './components/exercise/Exercise.jsx'
import AboutMe from './components/aboutme/AboutMe.jsx'
import ContactUs from './components/contactus/ContactUs.jsx'
import CProgramming from './components/c_programming/CProgramming.jsx';
import JavaProgramming from './components/java_programming/JavaProgramming.jsx';
import ReactProgramming from './components/react_programming/ReactProgramming.jsx';
import JavaScriptProgramming from './components/javascript_programming/JavaScriptProgramming.jsx';
import HtmlProgramming from './components/html_programming/HtmlProgramming.jsx';
import CssProgramming from './components/css_programming/CssProgramming.jsx';
import CMCQProgramming from './components/c_mcq_programming/CMCQProgramming.jsx';
import JavaMCQProgramming from './components/java_mcq_programming/JavaMCQProgramming.jsx';
import ReactMCQProgramming from './components/react_mcq_programming/ReactMCQProgramming.jsx';
import HTML_MCQProgramming from './components/html_mcq_programming/HTML_MCQProgramming.jsx';
import CSS_MCQProgramming from './components/css_mcq_programming/CSS_MCQProgramming.jsx';
import JavaScriptMCQProgramming from './components/javaScript_mcq_programming/JavaScriptMCQProgramming.jsx';
import CExerciceProgramming from './components/c_exercise_programming/CExerciceProgramming.jsx';
import JavaExerciseProgramming from './components/java_exercise_programming/JavaExerciseProgramming.jsx';
import ReactExerciseProgramming from './components/react__exercise_programming/ReactExerciseProgramming.jsx';
import HTMLExerciseProgramming from './components/html_exercise_programming/HTMLExerciseProgramming.jsx';
import CSSExerciseProgramming from './components/css_exercise_programming/CSSExerciseProgramming.jsx';
import JavaScriptExerciseProgramming from './components/javascript_exercise_programming/JavaScriptExerciseProgramming.jsx';
import Practice from './components/Advance/Practice.jsx';
import { C_Practice } from './components/c_practice/C_Practice.jsx';
import {Java_Practice} from './components/java_practice/Java_Practice.jsx';
import { React_Practice } from './components/ract_practice/React_Practice.jsx';
import { Css_Practice } from './components/css_practice/Css_Practice.jsx';
import { Html_Practice } from './components/html_practice/Html_Practice.jsx';
import { JavaScript_Practice } from './components/javaScript_practice/JavaScript_Practice.jsx';
import { C_TheoryPractice } from './components/c_practice/C_TheoryPractice.jsx';
import {C_ProgrammingPractice} from './components/c_practice/C_ProgrammingPractice.jsx';
import C_PatternPractice from './components/c_practice/C_PatternPractice.jsx';
import JavaTheoryPractice from './components/java_practice/JavaTheoryPractice.jsx';
import JavaProgrammingPractice from './components/java_practice/JavaProgrammingPractice.jsx';
import JavaPatternPractice from './components/java_practice/JavaPatternPractice.jsx';
import AllJavaInterViewQuestion from './components/java_practice/AllJavaInterViewQuestions.jsx';
import JavaOOpsPractice from './components/java_practice/JavaOOpsPractice.jsx';
import JavaExceptionPractice from './components/java_practice/JavaExceptionPractice.jsx';
import JavaMultithreadingPractice from './components/java_practice/JavaMultithreadingPractice.jsx';
import JavaCollectionPractice from './components/java_practice/JavaCollectionPractice.jsx';
import JavaCorePractice from './components/java_practice/JavaCorePractice.jsx';
import JavaMainMethodPractice from './components/java_practice/JavaMainMethodPractice.jsx';
import JavaInbuiltClassPractice from './components/java_practice/JavaInbuiltClassPractice.jsx';
import { Java8FeaturePractice } from './components/java_practice/Java8FeaturePractice.jsx';
import { C_AllTheoryPracticeType } from './components/c_practice/C_AllTheoryPracticeType.jsx';
import MethodReference from './components/java_programming/MethodReference.jsx';
import StreamApiInJava8 from './components/java_programming/StreamApiInJava8.jsx';
import C_LoopAllPractice from './components/c_practice/C_LoopAllPractice.jsx';
import C_Programming_Practice from './components/c_practice/C_Programming_Practice.jsx';
import C_DecisionControlStatementPractice from './components/c_practice/C_DecisionControlStatementPractice.jsx';
import C_AllArrayPractice from './components/c_practice/C_AllArrayPractice.jsx';
import C_AllPointerPractice from './components/c_practice/C_AllPointerPractice.jsx';
import C_AllFileHandlingPractice from './components/c_practice/C_AllFileHandlingPractice.jsx';
import C_Recursion_Practice from './components/c_practice/C_Recursion_Practice.jsx';
import C_Structure_Union_Practice from './components/c_practice/C_Structure_Union_Practice.jsx';
import { Java_Web_Application } from './components/java_practice/Java_Web_Application.jsx';
import ReactAllTypePractice from './components/ract_practice/react_all_type/ReactAllTypePractice.jsx';
import React_Core_Practice from './components/ract_practice/react_core_fundamental/React_Core_Practice.jsx';
import ReactCoreComponentsPractice from './components/ract_practice/react_all_core_component_practice/ReactCoreComponentsPractice.jsx';
import React_JSX_Practice from './components/ract_practice/react_all_core_component_practice/React_JSX_Practice.jsx';
import ReactPropsAllPractice from './components/ract_practice/react_all_core_component_practice/ReactPropsAllPractice.jsx';
import ReactStatePractice from './components/ract_practice/react_all_core_component_practice/ReactStatePractice.jsx';
import ReactVirtualDomPractice from './components/ract_practice/react_all_core_component_practice/ReactVirtualDomPractice.jsx';
import ConditionalRenderingPractice from './components/ract_practice/react_all_core_component_practice/ConditionalRenderingPractice.jsx';
import React_List_Key_Practice from './components/ract_practice/react_all_core_component_practice/React_List_Key_Practice.jsx';
import ReactEventHandlingPractice from './components/ract_practice/react_all_core_component_practice/ReactEventHandlingPractice.jsx';
import HtmlDocumentStructure from './components/html_practice/html-topics-explains/HtmlDocumentStructure.jsx';
import HtmlAttributesPractice from './components/html_practice/html-topics-explains/HtmlAttributesPractice.jsx';
import ElementAndTagPractice from './components/html_practice/html-topics-explains/ElementAndTagPractice.jsx';
import FormAndInputPractice from './components/html_practice/html-topics-explains/FormAndInputPractice.jsx';
import TableTagPractice from './components/html_practice/html-topics-explains/TableTagPractice.jsx';
import BlockAndInlineElementsPractice from './components/html_practice/html-topics-explains/BlockAndInlineElementsPractice.jsx';


let allRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'cources',
    element:<Cources></Cources>
  },
  {
    path:'mcq',
    element:<MCQ></MCQ>
  },
  {
    path:'exercise',
    element:<Exercise></Exercise>
  },
  {
    path:'advance',
    element:<Practice></Practice>
  },
  {
    path:'about-me',
    element:<AboutMe></AboutMe>
  },
  {
    path:'contact-us',
    element:<ContactUs></ContactUs>
  },
  {
    path:'c-programming',
    element:<CProgramming></CProgramming>
  },
  {
    path:'java-programming',
    element:<JavaProgramming></JavaProgramming>
  },
  {
    path:'react-programming',
    element:<ReactProgramming></ReactProgramming>
  },
  {
    path:'javascript-programming',
    element:<JavaScriptProgramming></JavaScriptProgramming>
  },
  {
    path:'html-programming',
    element:<HtmlProgramming></HtmlProgramming>
  },
  {
    path:'css-programming',
    element:<CssProgramming></CssProgramming>
  },
  {
    path:'c-mcq-programming',
    element:<CMCQProgramming></CMCQProgramming>
  },
  {
    path:'java-mcq-programming',
    element:<JavaMCQProgramming></JavaMCQProgramming>
  },
  {
    path:'react-mcq-programming',
    element:<ReactMCQProgramming></ReactMCQProgramming>
  },
  {
    path:'html-mcq-programming',
    element:<HTML_MCQProgramming></HTML_MCQProgramming>
  },
  {
    path:'css-mcq-programming',
    element:<CSS_MCQProgramming></CSS_MCQProgramming>
  },
  {
    path:'JavaScript-mcq-progrramming',
    element:<JavaScriptMCQProgramming></JavaScriptMCQProgramming>
  },
  {
    path:'c-exercise-programming',
    element:<CExerciceProgramming></CExerciceProgramming>
  },
  {
    path:'java-exercise-programming',
    element:<JavaExerciseProgramming></JavaExerciseProgramming>
  },
  {
    path:'react-exercise-programming',
    element:<ReactExerciseProgramming></ReactExerciseProgramming>
  },
  {
    path:'html-exercise-programming',
    element:<HTMLExerciseProgramming></HTMLExerciseProgramming>
  },
  {
    path:'css-exercise-programming',
    element:<CSSExerciseProgramming></CSSExerciseProgramming>
  },
  {
    path:'javascript-exercise-programming',
    element:<JavaScriptExerciseProgramming></JavaScriptExerciseProgramming>
  },
  {
    path:'c-practice',
    element:<C_Practice></C_Practice>
  },
  {
    path:'java-practice',
    element:<Java_Practice></Java_Practice>
  },
  {
    path:'react-practice',
    element:<ReactAllTypePractice></ReactAllTypePractice>
  },
  {
    path:'css-practice',
    element:<Css_Practice></Css_Practice>
  },
  {
    path:'html-practice',
    element:<Html_Practice></Html_Practice>
  },
  {
    path:'java-script-practice',
    element:<JavaScript_Practice></JavaScript_Practice>
  },
  {
    path:"c-theory-practice",
    element:<C_AllTheoryPracticeType></C_AllTheoryPracticeType>
  },
  {
    path:'c-theory-basic-practice',
    element:<C_TheoryPractice></C_TheoryPractice>
  },
  {
    path:"c-programming-practice",
    element:<C_Programming_Practice></C_Programming_Practice>
  },
  {
    path:"c-pattern-practice",
    element:<C_PatternPractice></C_PatternPractice>
  },
  {
    path:"java-theory-practice",
    element:<JavaTheoryPractice></JavaTheoryPractice>
  },
  {
    path:"java-programming-practice",
    element:<JavaProgrammingPractice></JavaProgrammingPractice>
  },
  {
    path:"java-pattern-practice",
    element:<JavaPatternPractice></JavaPatternPractice>
  },
  {
    path:"all-java-interview-practice",
    element:<AllJavaInterViewQuestion></AllJavaInterViewQuestion>
  },
  {
    path:"java-oops-practice",
    element:<JavaOOpsPractice></JavaOOpsPractice>
  },
  {
    path:"java-exception-practice",
    element:<JavaExceptionPractice></JavaExceptionPractice>
  },
  {
    path:'java-multithreading-practice',
    element:<JavaMultithreadingPractice></JavaMultithreadingPractice>
  },
  {
    path:'java-collection-practice',
    element:<JavaCollectionPractice></JavaCollectionPractice>
  },
  {
    path:'java-core-practice',
    element:<JavaCorePractice></JavaCorePractice>
  },
  {
    path:'java-main-method-practice',
    element:<JavaMainMethodPractice></JavaMainMethodPractice>
  },
  {
    path:'java-inbuilt-class-practice',
    element:<JavaInbuiltClassPractice></JavaInbuiltClassPractice>
  },
  {
    path:'java8-practice',
    element:<Java8FeaturePractice></Java8FeaturePractice>
  },
  {
    path:'all-method-reference',
    element:<MethodReference></MethodReference>
  },
  {
    path:'stream-api-in-java-8',
    elements:<StreamApiInJava8></StreamApiInJava8>
  },
  {
    path:`c-theory-loop-practice`,
    element:<C_LoopAllPractice></C_LoopAllPractice>
  },
  {
    path:`c-theory-decision-practice`,
    element:<C_DecisionControlStatementPractice></C_DecisionControlStatementPractice>
  },
  {
    path:`c-theory-array-practice`,
    element:<C_AllArrayPractice></C_AllArrayPractice>
  },
  {
    path:'c-theory-pointer-practice',
    element:<C_AllPointerPractice></C_AllPointerPractice>
  },
  {
    path:'c-theory-file-handling-practice',
    element:<C_AllFileHandlingPractice></C_AllFileHandlingPractice>
  },
  {
    path:'c-theory-recursive-function-practice',
    element:<C_Recursion_Practice></C_Recursion_Practice>
  },
  {
    path:'c-theory-struct-union-practice',
    element:<C_Structure_Union_Practice></C_Structure_Union_Practice>
  },
  {
    path:'web-practice-question',
    element:<Java_Web_Application></Java_Web_Application>
  },
  {
    path:'react-core-practice',
    element:<React_Core_Practice></React_Core_Practice>
  },
  {
    path:'react-components-practice',
    element:<ReactCoreComponentsPractice></ReactCoreComponentsPractice>
  },
  {
    path:'react-jsx-practice',
    element:<React_JSX_Practice></React_JSX_Practice>
  },
  {
    path:'react-pattern-practice',
    element:<ReactPropsAllPractice></ReactPropsAllPractice>
  },
  {
    path:'react-props-practice',
    element:<ReactStatePractice></ReactStatePractice>
  },
  {
    path:'react-virtual-dom-practice',
    element:<ReactVirtualDomPractice></ReactVirtualDomPractice>
  },
  {
    path:'react-conditional-rendering-practice',
    element:<ConditionalRenderingPractice></ConditionalRenderingPractice>
  },
  {
    path:'react-list-keys-pracitce',
    element:<React_List_Key_Practice></React_List_Key_Practice>
  },
  {
    path:'react-event-handling-practice',
    element:<ReactEventHandlingPractice></ReactEventHandlingPractice>
  },
  {
    path:'html-document-structure-practice',
    element:<HtmlDocumentStructure></HtmlDocumentStructure>
  },
  {
    path:'html-element-and-tag-practice',
    element:<ElementAndTagPractice></ElementAndTagPractice>
  },
  {
    path:'html-sementic-practice',
    element:<HtmlAttributesPractice></HtmlAttributesPractice>
  },
  {
    path:'html-form-input-tag-practice',
    element:<FormAndInputPractice></FormAndInputPractice>
  },
  {
    path:'html-table-practice',
    element:<TableTagPractice></TableTagPractice>
  },
  {
    path:'html-block-inline-element',
    element:<BlockAndInlineElementsPractice></BlockAndInlineElementsPractice>
  },
  {
    path:'html-linking-navigation-pracitce',
    element:''
  },
  {
    path:'html-embedding-media-practice',
    element:''
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allRouter}></RouterProvider>
  </StrictMode>,
)
