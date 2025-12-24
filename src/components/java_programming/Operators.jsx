import ternary_img from '../../img/ternary.jpg';

export default function Operators(){
    return(
        <>
            <div className="operators-in-c">
                <h5>What is Operator in Java Language?</h5>
                <p>Operator is a special symbol in Java lanuage.Operator is use to 'calculation' and 'logical' operation in programming language. </p>
                <h6><i><b>There are following type of Operator.</b></i></h6>
                <ul className="operators-list">
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Arithmetic Operator.</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Relational Operator.</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Logical Operator.</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Bitwise Operator.</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Assignment Operator.</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Sizeof Operator.</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Conditional Operator.</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> etc.</i></li>
                </ul>
            </div>
            <div className="about-operators">
                <h5>Introduction to Operators -:</h5>
                <ul>
                    <li>
                        <h6>1. Arithmetic  Operator -:</h6>
                        <p>Arithmetic operator is use to 'Calculate' the given to 'Operants' .</p>
                        
                        <h6><i><b>There are following type of Arithmetic Operator.</b></i></h6>
                        <ul className="arithmetic-list operator-type-list">
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Multiplication(*)</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Division(/)</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Modulus(%)</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Addition(+)</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Subtraction(-)</i></li>
                        </ul>
                    </li>
                    <li>
                        <h6 className="mt-3">2. Relational Operator -:</h6>
                        <p>Relational operator is use to 'Compare' the given to 'Operants', If given condition true then return the '1', If given condition false then return the '0'.</p>
                        <h6><i><b>There are following type of Arithmetic Operator.</b></i></h6>
                        <ul className="relational-list operator-type-list">
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Greater than({">"})</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Less than({"<"})</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Equal to({"=="})</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Not-Equal to({"!="})</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Greater than or equal to({">="})</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Less than or equal to({"<="})</i></li>
                        </ul>
                    </li>
                    <li>
                        <h6 className="mt-3">3. Logical Operator -:</h6>
                        <p>Logical operator is use to 'Combined' compare the given 'Multiple' operands, If given condistion true then return '1', If given condition false then return '0'.</p>
                        <h6><i><b>There are following type of Logical Operator.</b></i></h6>
                        <ul className="operator-type-list">
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Logical AND({"&&"})</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Logical OR({" || "})</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Logical NOT({"!"})</i></li>
                        </ul>
                    </li>
                    <li>
                        <h6 className="mt-3">4. Bitwise Operator -:</h6>
                        <p>Bitwise operator is use to 'Calculation' on binary code on 'Bits'.</p>
                        <h6><i><b>There are following type of Bitwise Operator.</b></i></h6>
                        <ul className="operator-type-list">
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Bitwise AND({"&"})</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Bitwise OR({" | "})</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Bitwise XOR({"^"})</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Right Shift({">>"})</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Left Shift({"<<"})</i></li>
                        </ul>
                    </li>
                    <li>
                        <h6 className="mt-3">5. Assignment Operator -:</h6>
                        <p>Assignment operator is use to the right side value store into left side variable.</p>
                    </li>
                    <li>
                        <h6 className="mt-3">6. 'instanceof' Operator -:</h6>
                        <p>instanceof operator return 'true' or 'false' in Java language.</p>
                    </li>
                    <li>
                        <h6 className="mt-3">7. Conditional (Ternary) Operator -:</h6>
                        <p>Conditional operator is use to compare the given to operand is given condition true the 'statement-1' will executed, If given condition false then 'statement-2' will executed.</p>
                        <i><b>Syntax -:</b></i>
                        <p>(Condition) ? {"Statement-1"} : {"Statement-2"};</p>
                        <img className='ternary-operator-img' src={ternary_img} alt="" />
                    </li>
                </ul>
            </div>
        </>
    )
}