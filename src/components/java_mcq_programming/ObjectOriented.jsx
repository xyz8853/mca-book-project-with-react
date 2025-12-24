import { useState } from "react";



export default function ObjectOriented(){
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
                        oops_mcq .map( (question, index)=>{
                            
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

let oops_mcq = [
    {
        question:'What is it called where object has its own lifecycle and child object cannot belong to another parent object?',
        option1:'Aggregation',
        option2:'Encapsulation',
        option3:'Association',
        option4:'Composition',
        currect:'Aggregation'
    },
    {
        question:'When Overloading does not occur?',
        option1:'More than one method with same name, same number of parameters and type but different signature',
        option2:'More than one method with same name, same signature but different number of signature',
        option3:'More than one method with same name, same signature, same number of parameters but different type',
        option4:'More than one method with same name but different method signature and different number or type of parameters',
        currect:'More than one method with same name, same number of parameters and type but different signature',
    },
    {
        question:'What is it called where child object gets killed if parent object is killed?',
        option1:'Association',
        option2:'Encapsulation',
        option3:'Composition',
        option4:'Aggretion',
        currect:'Composition',
    },
    {
        question:'Which concept of Java is achieved by combining methods and attribute into a class?',
        option1:'Polymorphism',
        option2:'Encapsulation',
        option3:'Inheritance',
        option4:'Abstraction',
        currect:'Encapsulation',
    },
    {
        question:'Which concept of Java is a way of converting real world objects in terms of class?',
        option1:'Encapsulation',
        option2:'Abstraction',
        option3:'Inheritance',
        option4:'Polymorphism',
        currect:'Abstraction',
    },
    {
        question:'Method overriding is combination of inheritance and polymorphism?',
        option1:'false',
        option2:'true',
        option3:'None',
        option4:'All',
        currect:'true'
    },
    {
        question:'When does method overloading is determined?',
        option1:'At execution time',
        option2:'At run time',
        option3:'At coding time',
        option4:'At compile time',
        currect:'At compile time',
    },
    {
        question:'Which of the following is not OOPS concept in Java?',
        option1:'Inheritance',
        option2:'Encapsulation',
        option3:'Compilation',
        option4:'Polymorphism',
        currect:'Compilation',
    },
    {
        question:'What is it called if an object has its own lifecycle and there is no owner?',
        option1:'Aggregation',
        option2:'Association',
        option3:'Encapsulation',
        option4:'Composition',
        currect:'Association',
    },
    {
        question:'Which of the following is a type of polymorphism in Java?',       
        option1:'Execution time polymorphism',
        option2:'Multiple polymorphism',
        option3:'Compile time polymorphism',
        option4:'Multilevel polymorphism',
        currect:'Compile time polymorphism',
    },
   
]