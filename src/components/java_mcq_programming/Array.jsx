import { useState } from "react";



export default function Array(){
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
                          array_mcq.map( (question, index)=>{
                              
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

      let array_mcq= [
        {
            question:'Which of these operators is used to allocate memory to array variable in Java?',
            option1:'new',
            option2:'alloc',
            option3:'new malloc',
            option4:'malloc',
            currect:'new'
        },
        {
            question:'int arr[] = new int [5] System.out.print(arr), What will be the output?',
            option1:'value stored in arr[0] ',
            option2:'Class name@ hashcode in hexadecimal form',
            option3:'0',
            option4:'00000',
            currect:'Class name@ hashcode in hexadecimal form'
        },
        {
            question:'Which of these is an incorrect Statement?',
            option1:'Array can be initialized when they are declared',
            option2:'It is necessary to use new operator to initialize an array',
            option3:'None of the mentioned',
            option4:'Array can be initialized using comma separated expressions surrounded by curly braces',
            currect:'It is necessary to use new operator to initialize an array'
        },
        {
            question:'Which of these is an incorrect array declaration?',
            option1:'int arr[] = new int[5] ',
            option2:'int arr[] = new int[5]',
            option3:'int arr[] = int [5] new',
            option4:'int [] arr = new int[5] ',
            currect:'int arr[] = int [5] new',
        },
        {
            question:'Which of these is necessary to specify at time of array initialization?',
            option1:'column',
            option2:'None of the mentioned',
            option3:'Both Row and Column',
            option4:'Row',
            currect:'Row'
        },
        {
            question:'Can you make an array volatile?',
            option1:'True',
            option2:'False',
            option3:'Both A and B',
            option4:'None',
            currect:'True'
        },
        {
            question:'How to copy contents of array?',
            option1:'Array.copy()',
            option2:'System.arrayCopy()',
            option3:'Arrays.copy()',
            option4:'Collection.copy()',
            currect:'System.arrayCopy()'
        },
        {
            question:'Where is an array stored in memory?',
            option1:'heap space and stack space',
            option2:'stack space',
            option3:'first generation memory',
            option4:'heap space',
            currect:'heap space'
        },
        {
            question:'How to sort an array?',
            option1:'Arrays.sort()',
            option2:'Collection.sort()',
            option3:'System.sort()',
            option4:'Array.sort()',
            currect:'Arrays.sort'
        },
        {
            question:'Generics does not work with?',
            option1:'Tree',
            option2:'Array',
            option3:'List',
            option4:'Set',
            currect:'Array'
        },
        {
            question:'An array elements are always stored in ________ memory locations.',
            option1:'Binary Search',
            option2:'Random',
            option3:'Sequantial',
            option4:'Sequantial and Random',
            currecr:'Sequantial'
        },
        
      ]