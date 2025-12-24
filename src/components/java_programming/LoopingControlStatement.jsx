import for_loop from '../../img/for-loop.webp';
import while_loop from '../../img/while-loop.webp';
import do_while_loop from '../../img/do-while.webp';

export default function LoopingContrlStatement(){
    return(
        <>
            <div className="looping-head">
                <div className="heading">
                    <h5>What is looping control statement</h5>
                        <p>In C programming language some time we need repeat some statement then we can use the looping control statement. It is reduce and remove the boilerplate code.</p>
                        <i><b>There are following type of looping statement</b></i>
                    <ul>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> for loop</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> while loop</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> do-while loop</i></li>
                    </ul>
                    <i><b>Using keword in loop statement</b></i>
                    <ul>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> continue</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> break</i></li>
                    </ul>
                </div>
                <div className="all-loop-definition">
                    <div className="for-loop">
                        <h5>1. for loop statement -:</h5>
                        {/* <p>for loop statement is use to repeat the some statement. It is entry control statement.</p> */}
                        <p>The for loop in C first evaluates the initialization expression. If it evaluates true, the first iteration of the loop will run, if false the loop will not run. The code within the loop will executed and then the loop will be updated by the loop expression and re-evaluated. If it is evaluated as true again, the body will run again. If it is false, the loop will exit.</p>
                        <i><b>Syntax -:</b></i>
                        <pre className="exec">
                            <code className="java hljs language-java">
                                <span className="hljs-keyword">for</span>(initialization; test condition;
                                update expression){"{"}
                                {"\n"}
                                <span className="hljs-comment">//code to be executed</span>
                                {"\n"}
                                {"}"}
                                {"\n"}
                            </code>
                        </pre>
                        <div className='for-loop-img mt-5'>
                            <h5><i><b>Flowchart of for loop -:</b></i></h5>
                            <img className='img-fluid' src={for_loop} alt="" />
                        </div>
                    </div>
                    <div className='while-loop mt-5'>
                        <h5>2. while loop statement -:</h5>
                        <p>The while loop in C is used to evaluate a test condition and iterate over the loop body until the condition returns True. The loop ends when the condition returns False.</p>
                        <i><b>Syntax -:</b></i>
                        <pre style={{ maxHeight: 600 }}>
                            <code className="c hljs cpp">
                                <span className="hljs-keyword">while</span> (testExpression) {"{"}
                                {"\n"}
                                {"  "}
                                <span className="hljs-comment">// the body of the loop </span>
                                {"\n"}
                                {"}"}
                            </code>
                        </pre>
                        <div className='while-loop-img mt-5'>
                            <img src={while_loop} alt="" />
                        </div>
                    </div>
                    <div className='do-while-loop mt-5'>
                        <h5>3. do-while loop statement -:</h5>
                        <p>The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the ...</p>
                        <i><b>Syntax -:</b></i>
                        <pre style={{ maxHeight: 600 }}>
                            <code className="c hljs cpp">
                                <span className="hljs-keyword">do</span> {"{"}
                                {"\n"}
                                {"  "}
                                <span className="hljs-comment">// the body of the loop</span>
                                {"\n"}
                                {"}"}
                                {"\n"}
                                <span className="hljs-keyword">while</span> (testExpression);
                            </code>
                        </pre>
                        <div className='do-while-img mt-5'>
                            <h5>Flowchart of do-while loop statement -:</h5>
                            <img src={do_while_loop} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}