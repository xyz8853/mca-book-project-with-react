

export default function ExceptionHandling(){
    return(
        <>
        <div className="exception-handling">
            <div className="exception-head">
                <h5>What is Exception in Java ?</h5>
                <p>Exception is a condition it is change the normal flow of program. Exception occur program runtime and terminate the program.</p>
                <h6 className="mt-2">Note -: </h6>
                <i>Exception occur proram Runtime.</i>
                <h6 className="mt-2"><i><b>There are following type of exception -:</b></i></h6>
                <ul>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> checked exception</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> unchecked exception</i></li>
                </ul>
                <div className="checked-exception mt-2">
                    <h5>1. Checked Exception -:</h5>
                    <p>Checked exception also check program compile-time, Checked exception force the programer 'handeld' or 'throw' it.</p>
                    <h6 className="mt-2"><i><b>There are some Checked exception name -:</b></i></h6>
                    <ul>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> ClassNotFoundException</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> FileNotFoundException</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> IOException</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> SQLException</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> etc.</i></li>
                    </ul>
                </div>
                <div className="unchecked-exception">
                    <h5>2. Unchecked Exception</h5>
                    <p>Unchecked exception also check program runtime, Unchecked exception not force the programer handled or thrw it.</p>
                    <h6 className="mt-2"><i><b>There are some Unchecked exception name -:</b></i></h6>
                    <ul>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> NullPointerException</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> ArithmeticException</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> ClassCastException</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> NumberFormatException</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> etc.</i></li>
                    </ul>
                </div>
            </div>
            <div className="exception-handling">
                <h5>Exception Handling</h5>
                <h6><i><b>There are Five keyword to handel exception -:</b></i></h6>
                <ul> 
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> try</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> catch</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> finally</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> throw</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> throws</i></li>
                </ul>
                <div className="try-block">
                    <h5>1. try -:</h5>
                    <p>Inside try block write the witch code generate exception. If any exception occur inside try block solve the five step.</p>
                    <ul>
                        <li><i>detect the exception</i></li>
                        <li><i>identifie the exception class</i></li>
                        <li><i>generate the exception class object</i></li>
                        <li><i>store message and information in exception object</i></li>
                        <li><i>throw for handling</i></li>
                    </ul>
                    <h6><i><b>Note -:</b></i></h6>
                    <ul>
                        <li><b>1. </b><i>without catch and finally block we can not use try block</i></li>
                        <li><b>2. </b><i>try block nested also</i></li>
                        <li><b>3. </b><i>without try block we can not use catch and finally block</i></li>
                    </ul>
                </div>
                <div className="catch-block">
                    <h5>2. catch block -:</h5>
                    <p>catch block is use the handeld the exception throw from the try block.catch block multiple also with single try block.</p>
                    <h6><i><b>Note -:</b></i></h6>
                    <ul>
                        <li><b>1. </b><i>inside catch block first use child class after parent class</i></li>
                        <li><b>2. </b><i>catch block after finally block attached</i></li>
                        <li><b>3. </b><i>finally block after we can not use attached catch block.</i></li>
                    </ul>
                </div>
                <div className="finally-block">
                    <h5>3. finally block -:</h5>
                    <p>finally block also executed exception occur or not. Inside finally block also write clean up code at Ex. delete the file, close the open file, copy the file etc.</p>
                </div>
                <div className="throw-keyword mt-2">
                    <h5>4. throw keyword -:</h5>
                    <p>throw keyword is use to throw the exception class object at a time.</p>
                </div>
                <div className="throws-keyword mt-2">
                    <h5>5. throws keyword -:</h5>
                    <p>The Java throws keyword is used to declare an exception. It gives an information to the programmer that there may occur an exception. So, it is better for the programmer to provide the exception handling code so that the normal flow of the program can be maintained.</p>  
                </div>
            </div>
        </div>
        </>
    )
}