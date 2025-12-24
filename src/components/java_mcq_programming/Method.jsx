import { useState } from "react";


export default function Method(){

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
        question:"valid method declration in java",
        option1:'public void fun1();',
        option2:'private void fun2();' ,
        option3:'protected void fun3();',
        option4:'All',
        currect:'All'
    },
    {
        question:'which method override in java ?',
        option1:'default method',
        option2:'private method',
        option3:'protected method',
        option4:'All',
        currect:'All'
    },
    {
        question:'Which of this statement is incorrect?',
        option1:'All object of a class are allotted memory for the methods defined in the class',
        option2:'All object of a class are allotted memory for the all the variables defined in the class',
        option3:'If a function is defined public it can be accessed by object of other class by inheritation',
        option4:'main() method must be made public',
        currect:'All object of a class are allotted memory for the methods defined in the class'
    },
    {
        question:'What is the process of defining more than one method in a class differentiated by method signature?',
        option1:'Function overloading',
        option2:'Function overriding',
        option3:'Function doubling',
        option4:'None of the mentioned',
        currect:'Function overloading'
    },
    {
        question:'What is the return type of a method that does not return any value?',
        option1:'void',
        option2:'int',
        option3:'double',
        option4:'float',
        currect:'void'
    },
    {
        question:'Which method can be defined only once in a program?',
        option1:'private method',
        option2:'static  method',
        option3:'finalize method',
        option4:'main',
        currect:'main'
    },
    {
        question:'Which of the following is a method having same name as that of it class?',
        option1:'finalize',
        option2:'constructor',
        option3:'class',
        option4:'delete',
        currect:'constructor',
    },
    {
        question:'What is the process of defining a method in terms of itself, that is a method that calls itself?',
        option1:'Recursion',
        option2:'Abstraction',
        option3:'Polymorphism',
        option4:'Encapsulation',
        currect:'Recursion',
    },
    {
        question:'Which of these can be overloaded?',
        option1:'None of the mentioned',
        option2:'Methods',
        option3:'All the mentioned',
        option4:'Constructor',
        currect:'All the mentioned'
    },
    {
        question:'Which of these is correct about passing an argument by call-by-value process?',
        option1:'Copy of argument is made into the formal parameter of the subroutine',
        option2:'Copy of argument is made into the formal parameter of the subroutine and changes made on parameters of subroutine have effect on original argument',
        option3:'Reference to original argument is passed to formal parameter of the subroutine and changes made on parameters of subroutine have effect on original argument',
        option4:'Reference to original argument is passed to formal parameter of the subroutine',
        currect:'Copy of argument is made into the formal parameter of the subroutine'
    },
    {
        question:'What is the process of defining two or more methods within same class that have same name but different parameters declaration?',
        option1:'method overriding',
        option2:'method overloading',
        option3:'method none of the mentioned',
        option4:'method hiding',
        currect:'method overloading'
    }
]