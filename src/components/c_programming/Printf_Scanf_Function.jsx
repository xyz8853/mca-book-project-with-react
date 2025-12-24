import hello_world from '../../img/hello.jpg'
import input_value from '../../img/input.png';

export default function Printf_Scanf_Function(){
    return(
        <>
        <div className='printf-function mt-5'>
            <h5 className="">Work of 'printf' function -:</h5>
            <p>Printf function is use to desplay the message and value of variable.
                Printf function also count how many character display by it.
                We can write printf function nested also.
            </p>
        </div>
        <h6><strong>Syntax -:</strong></h6>
            <p>{'\printf(" <format-specifier> " ,length-of-variable);'}</p>
            <div className='printf-exp'>
                <img className='img' src={hello_world} alt="" />
            </div>
            <div className='scanf-function mt-5'>
                <h5 className="">Work of 'scanf' function -:</h5>
                <p>Scanf function one of the most important function in C language. Scanf function take input from the user program run time scanf, Scanf function also count how many value store successfuly in variable</p>
                <h6><strong>Syntax -:</strong></h6>
                <p>{'\scanf(" <format-specifier> " ,&length-of-variable);'}</p>
            </div>
            <div className='printf-exp'>
                <img className='img' src={input_value} alt="" />
            </div>
            
        </>
    )
}