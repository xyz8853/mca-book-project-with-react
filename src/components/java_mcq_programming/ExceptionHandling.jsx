import { useState } from "react";


export default function ExceptionHandling(){
       let [activeOption1, setActiveOption1] = useState();
       let [activeOption2, setActiveOption2] = useState();
       let [activeOption3, setActiveOption3] = useState();
       let [activeOption4, setActiveOption4] = useState();
   
       let [result1 , setResult1] = useState(false);
       let [result2 , setResult2] = useState(false);
       let [result3 , setResult3] = useState(false);
       let [result4 , setResult4] = useState(false);
   
   
       let [resultOption1, setResultOption1] = useState(false);
       let [resultOption2, setResultOption2] = useState(false);
       let [resultOption3, setResultOption3] = useState(false);
       let [resultOption4, setResultOption4] = useState(false);
   
       let option1 = (optionName, index,option1Value, currectOption)=>{
           let rightResult = true;
           let wrongResult = false;
           setResultOption1(rightResult);
           if(option1Value == currectOption){
               setResult1(rightResult);
           }else{
               setResult1(wrongResult);
           }
       }
   
       let option2 = (optionName, index,option2Value, currectOption)=>{
           console.log('option2');
           let rightResult = true;
           let wrongResult = false;
           setResultOption2(rightResult);
           if(option2Value == currectOption){
               setResult2(rightResult);
           }else{
               setResult2(wrongResult);
           }
       }
   
       let option3 = (optionName, index,option3Value, currectOption)=>{
           console.log('option3');
           let rightResult = true;
           let wrongResult = false;
           setResultOption3(rightResult);
           if(option3Value == currectOption){
               setResult3(rightResult);
           }else{
               setResult3(wrongResult);
           }
       }
   
       let option4 = (optionName, index,option4Value, currectOption)=>{
           let rightResult = true;
           let wrongResult = false;
           setResultOption4(rightResult);
           if(option4Value == currectOption){
               setResult4(rightResult);
           }else{
               setResult4(wrongResult);
           }
           console.log('option4');
       }
   
       return(
           <>
               <div className="c-mcq">
                   <div className="questions">
                   {
                       exception_mcq.map( (question, index)=>{
                           
                         return(
                           <ul className="mcq-options" key={index}>
                               <li><h4 className="mcq-question">{1+index}. {question.question}</h4></li>
                               <ul className="options">
                                   <li className={
                                       (resultOption1 == true)
                                       ? 
                                         (result1== index)? 'mcq-right' : 'mcq-wrong'
                                       :
                                       'option'
   
                                   }
                                    onClick={()=>option1(`${'option1'}`,index,question.option1,question.currect)}>
                                   
                                   <input type="radio" name="option" id={'option1'+index}/> <label htmlFor={'option1'+index}> {question.option1}</label></li>
                                   <li className={
                                       (resultOption2 == true)
                                       ?
                                           (result2 == true)? 'mcq-right' : 'mcq-wrong'
                                       :
                                       'option'
   
                                   } 
                                   
                                   onClick={()=>option2(`${'option2'}`,index,question.option2,question.currect)}><input type="radio" name="option" id={'option2'+index}/> <label htmlFor={'option2'+index}> {question.option2}</label></li>
                                   <li className={
                                       (resultOption3 == true)
                                       ?
                                           (result3 == true)? 'mcq-right' : 'mcq-wrong'
                                       :
                                       'option'
                                   } 
                                   onClick={()=>option3(`${'option3'}`,index,question.option3,question.currect)}><input type="radio" name='option' id={'option3'+index}/> <label htmlFor={'option3'+index}> {question.option3}</label></li>
                                   <li className={
                                       (resultOption4 == true)
                                       ?
                                           (result4 == true)? 'mcq-right' : 'mcq-wrong'
                                       :
                                       'option'
                                   } onClick={()=>option4(`${'option4'}`, index, question.option4, question.currect)}>
                                       
                                   <input type="radio" name="option" id={'option4'+index}/> <label htmlFor={'option4'+index}> {question.option4}</label></li>
                                   <li className="mt-2"><button className="mcq-answer-button">Answer</button></li>
                               </ul>  
                           </ul>
                         )
                       })
                   }
                   </div>                
               </div>
           </>
       )
}

let exception_mcq = [
    {
        question:'Which of the following operators is used to generate instance of an exception which can be thrown using throw?',
        option1:'thrown',
        option2:'malloc',
        option3:'new',
        option4:'alloc',
        currect:'new',
    },
    {
        question:'At runtime, error is recoverable.',
        option1:'true',
        option2:'false',
        option3:'All',
        option4:'None',
        currect:'false',
    },
    {
        question:'Which of the following handles the exception when a catch is not used?',
        option1:'throw handler',
        option2:'finally',
        option3:'default handler',
        option4:'java run time system',
        currect:'default handler',
    },
    {
        question:'Which of the following keywords is used for throwing exception manually?',
        option1:'try',
        option2:'finally',
        option3:'catch',
        option4:'throw',
        currect:'throw',
    },
    {
        question:'Which of the following keyword is used by a calling function to handle exception thrown by a called function?',
        option1:'try',
        option2:'throws',
        option3:'catch',
        option4:'throw',
        currect:'catch',
    },
    {
        question:'Which of the following classes can catch all exceptions which cannot be caught?',
        option1:'ParentException',
        option2:'RuntimeException',
        option3:'Exception',
        option4:'Error',
        currect:'Error'
    },
    {
        question:'Which of the following should be true of the object thrown by a thrown statement?',
        option1:'Should be assignable to Exception type',
        option2:'Should be assignable to Throwable type',
        option3:'Should be assignable to String type',
        option4:'Should be assignable to Error type',
        currect:'Should be assignable to Throwable type',
    },
    {
        question:'Which of the following is a super class of all exception type classes?',
        option1:'String',
        option2:'Catchable',
        option3:'RuntimeException',
        option4:'Throwble',
        currect:'Throwble',
    },
    {
        question:'Which part of code gets executed whether exception is caught or not?',
        option1:'throw',
        option2:'catch',
        option3:'finally',
        option4:'try',
        currect:'finally',
    }
]