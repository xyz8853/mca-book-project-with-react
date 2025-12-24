import { useState } from "react";


export default function InterfaceConcept(){
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
                       interface_mcq.map( (question, index)=>{
                           
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

   let interface_mcq = [
    {
        question:'What happens when we access the same variable defined in two interfaces implemented by the same class?',    
        option1:'The JVM is not able to identify the correct variable',
        option2:'Compilation failure',
        option3:'The interfaceName.variableName needs to be defined',
        option4:'Runtime Exception',
        currect:'The interfaceName.variableName needs to be defined'
    },
    {
        question:'Which of the following is the correct way of implementing an interface A by class B?',
        option1:'class B imports A{}',
        option2:'class B implements A{}',
        option3:'class B extends A{}',
        option4:'None of the mentioned',
        currect:'class B imports A{}'
    },
    {
        question:'What type of methods an interface contain by default?',
        option1:'final',
        option2:'private',
        option3:'abstract',
        option4:'static',
        currect:'abstract'
    },
    {
        question:'What will happen if we provide concrete implementation of method in interface?',
        option1:'Runtime exception is thrown',
        option2:'Method not found exception is thrown',
        option3:'Compilation failure',
        option4:'The concrete class implementing that method need not provide implementation of that method',
        currect:'Compilation failure'
    },
    {
        question:'What type of variable can be defined in an interface?',
        option1:'public static',
        option2:'private final',
        option3:'static final',
        option4:'public final',
        currect:'static final'
    },
    {
        question:'All methods must be implemented of an interface.',
        option1:'False',
        option2:'True',
        option3:'Not menstioned',
        option4:'None',
        currect:'True'
    },
    {
        question:'Can “abstract” keyword be used with constructor, Initialization Block, Instance Initialization and Static Initialization Block.',
        option1:'True',
        option2:'False',
        option3:'All Above',
        option4:'None',
        currect:'False'
    },
    {
        question:'What happens when a constructor is defined for an interface?',
        option1:'Runtime Exception',
        option2:'The interface compiles successfully',
        option3:'The implementing class will throw exception',
        option4:'Compilation failure',
        currect:'Compilation failure'
    },
    {
        question:'Which of the following access specifiers can be used for an interface?',
        option1:'Private',
        option2:'Public, Protected, Private',
        option3:'Public',
        option4:'Protected',
        currect:'public'
    },
    {
        question:'What does an interface contain?',
        option1:'Method definition',
        option2:'Method declaration',
        option3:'Method name',
        option4:'Method declaration and definition',
        currect:'Method declaration',
    },
    {
        question:'Which of this package is used for analyzing code during run-time? ',
        option1:'java.applet',
        option2:'java.io',
        option3:'java.awt',
        option4:'java.lang.reflect',
        currect:'java.lang.reflect'
    },
    {
        question:'Which of this package is used for handling security related issues in a program? ',
        option1:'java.io.security',
        option2:'java.security',
        option3:'java.awt.image',
        option4:'java.lang.security',
        currect:'java.security'
    },
    {
        question:'Which of this package is used for invoking a method remotely? ',
        option1:'java.util',
        option2:'java.rmi',
        option3:'java.applet',
        option4:'java.awt',
        currect:'java.rmi'
    },
    {
        question:'Which of these class allows us to get real time data about private and protected member of a class? ',
        option1:'MembersPermission',
        option2:'MembersPermission',
        option3:'java.io',
        option4:'ReflectPermission',
        currect:'ReflectPermission'
    },
    {
        question:'Which of these package is used for graphical user interface? ',
        option1:'java.applet',
        option2:'java.awt',
        option3:'java.awt.image',
        option4:'java.io',
        currect:'java.awt'
    },
    {
        question:'JUnits are used for which type of testing?',
        option1:'Blackbox Testing',
        option2:'System Testing',
        option3:'Integration Testing',
        option4:'Unit Testing',
        currect:'Unit Testing'
    },
    {
        question:'What does assertSame() method use for assertion?',
        option1:'==',
        option2:'isEqual() method',
        option3:'equals() method ',
        option4:'equals() method ',
        currect:'=='
    },
    {
        question:'Which method is used to verify the actual and expected results in Junits?',
        option1:'isEqual()',
        option2:'equals()',
        option3:'assert()',
        option4:'==',
        currect:'assert()'
    },
    {
        question:'How to let junits know that they need to be run using PowerMock?',
        option1:'@RunWith(PowerMockRunner.class)',
        option2:'@PowerMock',
        option3:'@RunWith(PowerMock)',
        option4:'@RunWith(Junits)',
        currect:'@RunWith(PowerMockRunner.class)',
    },
    {
        question:'Which of these is not a mocking framework?',
        option1:'MockJava',
        option2:'EasyMock',
        option3:'Mockito',
        option4:'PowerMock',
        currect:'MockJava'
    },
    {
        question:'Which of the below statement about JUnit is false?',
        option1:'They cannot be run automatically',
        option2:'It is an open source framework',
        option3:'It provides test runners for running test',
        option4:'It provides an annotation to identify test methods',
        currect:'They cannot be run automatically'
    },
    {
        question:'How can we simulate if then behavior in Junits?',
        option1:'Mockito.if(..).then(..);',
        option2:'if(..){..} else{..}',
        option3:'Mockito.when(...).thenReturn(...);',
        option4:'if{..} else{..}',
        currect:'Mockito.when(...).thenReturn(...);'
    },
    {   
        question:'What is used to inject mock fields into the tested object automatically?',
        option1:'@InjectMocks',
        option2:'@Mock',
        option3:'@InjectMockObject',
        option4:'@Inject',
        currect:'@InjectMocks'
    },
    {
        question:'Which of the below is an incorrect annotation with respect to JUnits?',
        option1:'@BeforeClass',
        option2:'@AfterEach',
        option3:'@Junit',
        option4:'@Test',
        currect:'@Junit'
    }

   ]