import { useState } from "react";


let BasicDeclaration = ()=>{

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
                                    <input type="checkbox" name={`answer-11211${index}[]`} id={'option1'+index}/> <label htmlFor={'option1'+index}> {question.option1}</label> 
                                </li>
                                <li className={
                                    (question.option2===currectOption && index==activeQuestionIndex)
                                     ? "mcq-right" 
                                     : "mcq-wrong"} 
                                     onClick={()=>{optionClickFunction(index,question.option2)}} name={index}>
                                    <input type="checkbox" name={`answer-11212${index}[]`} id={'option2'+index}/> <label htmlFor={'option2'+index}> {question.option2}</label>
                                </li>
                                <li className={
                                    (question.option3===currectOption && index==activeQuestionIndex)
                                     ? "mcq-right" 
                                     : "mcq-wrong"}
                                      onClick={()=>{optionClickFunction(index,question.option3)}} name={index}>
                                    <input type="checkbox" name={`answer-11213${index}[]`} id={'option3'+index}/> <label htmlFor={'option3'+index}> {question.option3}</label>
                                </li>
                                <li className={
                                    (question.option4===currectOption && index==activeQuestionIndex)
                                     ? "mcq-right" 
                                     : "mcq-wrong"}
                                      onClick={()=>{optionClickFunction(index,question.option4)}} name={index}>
                                    <input type="checkbox" name={`answer-11214${index}[]`} id={'option4'+index}/> <label htmlFor={'option4'+index}> {question.option4}</label></li>
                                <li className="mt-2">
                                    <button onClick={()=>answerBtn(index)} className=
                                    {
                                        (btnClick && btnClickIndex==index)? 'mcq-answer-hide' : 'mcq-answer-button'
                                    }>
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
        questionId:1,
        question:"Variable valid declration",
        option1:'int 1number;',
        option2:'int int;' ,
        option3:'int  max-age;',
        option4:'int total_amount;',
        currect:'int total_amount;'
    },
    {
        questionId:2,
        question:'Choose the invalid keyword',
        option1:'extern',
        option2:'union',
        option3:'back',
        option4:'continue',
        currect:'back'
    },
    {
        questionId:3,
        question:'valid function declaration',
        option1:'employee();',
        option2:'int int employee();',
        option3:'employee()',
        option4:'char employee();',
        currect:'char employee();'
    },
    {
        questionId:4,
        question:'int data-type size in byte',
        option1:'4 byte',
        option2:'2 byte',
        option3:'1 byte',
        option4:'None',
        currect:'2 byte'
    },
    {
        questionId:5,
        question:'C language developer?',
        option1:'Martin Richards',
        option2:'Ken Thompson',
        option3:'Dennis Ritchie',
        option4:'Brian Kernighan',
        currect:'Dennis Ritchie'
    },
    {
        questionId:6,
        question:'C language developed Lab?',
        option1:'Bell Laboratories',
        option2:'Ken Laboratories',
        option3:'Marchik Laboratories',
        option4:'None',
        currect:'Bell Laboratories'
    },
    {
        questionId:7,
        question:'C language which level of programming language?',
        option1:'Low level',
        option2:'Middle level',
        option3:'High level',
        option4:'4th generation',
        currect:'High level'
    },
]

export default BasicDeclaration;