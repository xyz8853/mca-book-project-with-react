
import React from "react";
import { useState } from "react";

export default function HtmlBasicMcq(){

    let [activeQuestionIndex, setActiveQuestinIndex] = useState();
    let [clickOption, setClickOption] = useState('');
    let [currectOption, setCurrectOption] = useState('');
    let [btnClick, setBtnClick] = useState(false);
    let [btnClickIndex, setBtnClickIndex] = useState();

    function optionClickFunction(index, clickOption){
        setClickOption(clickOption);
        setActiveQuestinIndex(index);

        let value = basic_mcq.filter( (ob1, qIndex)=> {
                if(qIndex==index){
                    console.log("----------------- : "+qIndex);
                    return true;
                }
                else{
                   console.log("============ : "+index);
                   return false;
                }
        })
        value.map( (question,index)=>{
              if(clickOption===question.currect){
                    console.log(question);
                    console.log(question.currect);
                    setCurrectOption(question.currect);
              }
              else
                 console.log('false');
        })
        
        // console.log("Option :"+clickOption+" Index :"+index);
    }

    let total_mcq = 0;

    let answerBtn =(index)=>{
       setBtnClickIndex(index);

       if(btnClick==false){
           let click = true;
           setBtnClick(click);
       }else{
          let click = false;
          setBtnClick(click);
       }
    }

    return(
        <>
            <div className="c-mcq">
                <div className="questions">
                {
                    basic_mcq.map( (question, index)=>{
                      total_mcq++;
                      return(
                        <ul className="mcq-options" key={index}>
                            <li><h4 className="mcq-question">{1+index}. {question.question}</h4></li>
                            <ul className="options">
                                <li className={
                                    (question.option1===currectOption && index==activeQuestionIndex)
                                     ? "mcq-right" 
                                     : "mcq-wrong"
                                } onClick={()=>{optionClickFunction(index,question.option1)}} name={index}>
                                    <input type="radio" name="option" id={'option1'+index}/> <label htmlFor={'option1'+index}> {question.option1}</label> 
                                </li>
                                <li className={
                                    (question.option2===currectOption && index==activeQuestionIndex)
                                     ? "mcq-right" 
                                     : "mcq-wrong"} 
                                     onClick={()=>{optionClickFunction(index,question.option2)}} name={index}>
                                    <input type="radio" name="option" id={'option2'+index}/> <label htmlFor={'option2'+index}> {question.option2}</label>
                                </li>
                                <li className={
                                    (question.option3===currectOption && index==activeQuestionIndex)
                                     ? "mcq-right" 
                                     : "mcq-wrong"}
                                      onClick={()=>{optionClickFunction(index,question.option3)}} name={index}>
                                    <input type="radio" name='option' id={'option3'+index}/> <label htmlFor={'option3'+index}> {question.option3}</label>
                                </li>
                                <li className={
                                    (question.option4===currectOption && index==activeQuestionIndex)
                                     ? "mcq-right" 
                                     : "mcq-wrong"}
                                      onClick={()=>{optionClickFunction(index,question.option4)}} name={index}>
                                    <input type="radio" name="option" id={'option4'+index}/> <label htmlFor={'option4'+index}> {question.option4}</label></li>
                                <li className="mt-2">
                                    <button onClick={()=>answerBtn(index)} className="mcq-answer-button">
                                        {
                                          (btnClick && btnClickIndex==index)? 'Hide' : 'Answer'
                                        }
                                    </button>
                                </li>
                                <li className="show-answer">
                                    {
                                      (index == btnClickIndex && btnClick)
                                      ? `${question.currect}` : ''
                                            
                                    } 
                                </li>
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


let basic_mcq = [
        {
            question:'What is the range of byte data type in Java?',
            option1:'None of the mentioned',
            option2:'-128 to 127',
            option3:'-32768 to 32767',
            option4:'-2147483648 to 2147483647',
            currect:'-128 to 127'
        },
        {
            question:'Which data type value is returned by all transcendental math functions?',
            option1:'long',
            option2:'int',
            option3:'float',
            option4:'double',
            currect:'double'
        },
        {
            question:'Which of these literals can be contained in float data type variable?',
            option1:'-3.4e+038',
            option2:'-1.7e+308',
            option3:'+1.7e+308',
            option4:'-3.4e+050',
            currect:'-3.4e+038'
        },
        {
            question:'What is the range of short data type in Java?',
            option1:'-2147483648 to 2147483647',
            option2:'None of the mentioned',
            option3:'-32768 to 32767',
            option4:'-128 to 127',
            currect:'-32768 to 32767'
        },
        {
            question:'An expression involving byte, int, and literal numbers is promoted to which of these?',
            option1:'long',
            option2:'byte',
            option3:'float',
            option4:'int',
            currect:'int',
        },
        {
            question:'Which of these values can a boolean variable contain?',
            option1:'Any Integer value',
            option2:'True & False',
            option3:'1 & 0',
            option4:'true',
            currect:'true',
        },
        {
            question:'Which one is a valid declaration of a boolean?',
            option1:`boolean b4 = 'true'`,
            option2:`boolean b3 = false`,
            option3:`boolean b2 = 'false'`,
            option4:'boolean b1 = 1',
            currect:'boolean b3 = false',
        },
        {
            question:'Which of these coding types is used for data type characters in Java?',
            option1:'ASCII',
            option2:'None of the Mentioned',
            option3:'UNICODE',
            option4:'ISO-LATIN-1',
            currect:'UNICODE',
        },
        {
            question:'What is the numerical range of a char data type in Java?',
            option1:'0 tp 256',
            option2:'-128 to 127',
            option3:'0 to 65535',
            option4:'0 to 32767',
        },
        
    ]