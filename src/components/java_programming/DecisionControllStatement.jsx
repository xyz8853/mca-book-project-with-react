import if_img from '../../img/if.webp';
import if_else_img from '../../img/if-else3.png';
import nested_if_else_img from '../../img/nested-if-else.png';
import ladder_if_else_img from '../../img/ladder.jpg';
import switch_case from '../../img/swi.png';


export default function DecisionControllStatement(){
    return(
        <>
        <div className="mt-5">
                <h5>What is decision controll statement?</h5>
                <p>In fromgramming language some time we need to check some condition then we can use the decision constrol statment in Java langauge.</p>
                <h6><i><b>There are following type of Decision Constrol Statement.</b></i></h6>
                <ul className="control-list">
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Simple if</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> if-else</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Nested if-else</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Ladder if-else</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Switch-case statement</i></li>
                </ul>
            </div>
            <div className="if-condtion">
                <h5>Simple if Statement -:</h5>
                <p>Simple if statement is use to check the given condition if given condition true 'if' statement will executed.</p>
                <div className="syntax-of-if mt-3">
                    <h5 className='mb-5'>Syntax of if Statement -:</h5>
                    <pre><b/><strong>if</strong><span>(</span><i><em className="GFGEditorTheme__textItalic">condition</em></i><span>) </span><br/><span>{"{"}</span><br/><span>   </span><i><em className="GFGEditorTheme__textItalic">// Statements to execute if</em></i><br/><i><em className="GFGEditorTheme__textItalic">   // condition is true</em></i><br/><span>{"}"}</span><br/></pre>
                </div>
                <div className='flowchat-of-if mt-4'>
                    <h5>Flowchat of if Statement -:</h5>
                    <img className='img-fluid' src={if_img} alt="" />
                </div>
            </div>
            <div className="if-else-condtion mt-5">
                <h5 className=''>if-else Statement -:</h5>
                <p>if-else statement is use to check the given condition if given condition 'true' if statement will executed, If given condtion false then else statement will executed.</p>
                <div className='syntax-of-if-else mt-3'>
                    <h5 className='mb-5'>Syntax of if-else Statement -:</h5>
                    <pre>
                        <b>
                            <strong>if</strong>
                        </b>
                        <span> (</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">condition</em>
                        </i>
                        <span>)</span>
                        <br />
                        <span>{"{"}</span>
                        <br />
                        <span>{"   "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic"> // Executes this block if</em>
                        </i>
                        <br />
                        <i>
                            <em className="GFGEditorTheme__textItalic">{"    "}// condition is true</em>
                        </i>
                        <br />
                        <span>{"}"}</span>
                        <br />
                        <b>
                            <strong>else</strong>
                        </b>
                        <br />
                        <span>{"{"}</span>
                        <br />
                        <span>{"    "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">// Executes this block if</em>
                        </i>
                        <br />
                        <i>
                            <em className="GFGEditorTheme__textItalic">
                            {"    "}// condition is false
                            </em>
                        </i>
                        <br />
                        <span>{"}"}</span>
                        <br />
                    </pre>

                </div>
                <div className='flowchart-if-else mt-5'>
                    <h5 className=''>Flowchat of if-else Statement -:</h5>
                    <img src={if_else_img} alt="" />
                </div>
                
            </div>
            <div className="nested-if-else-condtion mt-5">
                <h5>Nested if-else Statement -:</h5>
                <p>if-else statement is use to check the given condition if given condition 'true' if statement will executed, If given condtion false then else statement will executed.</p>
                <div className='syntax-of-nested-if-else'>
                    <h5 className='mb-5'>Syntax of Nested if-else Statement -:</h5>
                    <pre>
                        <b>
                            <strong>if</strong>
                        </b>
                        <span> (</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">condition1</em>
                        </i>
                        <span>) </span>
                        <br />
                        <span>{"{"}</span>
                        <br />
                        <span>{"   "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">
                            // Executes when condition1 is true
                            </em>
                        </i>
                        <br />
                        <span>{"   "}</span>
                        <b>
                            <strong>if</strong>
                        </b>
                        <span> (</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">condition_2</em>
                        </i>
                        <span>) </span>
                        <br />
                        <span>
                            {"   "}
                            {"{"}
                        </span>
                        <br />
                        <span>{"     "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic"> // statement 1</em>
                        </i>
                        <br />
                        <span>
                            {"   "}
                            {"}"}
                        </span>
                        <br />
                        <span>{"   "}</span>
                        <b>
                            <strong>else</strong>
                        </b>
                        <br />
                        <span>
                            {"   "}
                            {"{"}
                        </span>
                        <br />
                        <span>{"         "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">// Statement 2</em>
                        </i>
                        <br />
                        <i>
                            <em className="GFGEditorTheme__textItalic">{"    "}</em>
                        </i>
                        <span>{"}"}</span>
                        <br />
                        <span>{"}"}</span>
                        <br />
                        <b>
                            <strong>else {"{"}</strong>
                        </b>
                        <br />
                        <b>
                            <strong>{"   "}</strong>
                        </b>
                        <span>{"  "}if (</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">condition_3</em>
                        </i>
                        <span>) </span>
                        <br />
                        <span>
                            {"   "}
                            {"{"}
                        </span>
                        <br />
                        <span>{"    "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">{"  "}// statement 3</em>
                        </i>
                        <br />
                        <span>
                            {"   "}
                            {"}"}
                        </span>
                        <br />
                        <span>{"   "}</span>
                        <b>
                            <strong>else</strong>
                        </b>
                        <br />
                        <span>
                            {"   "}
                            {"{"}
                        </span>
                        <br />
                        <span>{"   "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">{"      "}// Statement 4</em>
                        </i>
                        <br />
                        <span>
                            {"    "}
                            {"}"}
                        </span>
                        <br />
                        <span>{"}"}</span>
                    </pre>

                </div>
                <div className='flowchart-nested-if-else mt-4'>
                    <h5>Flowchart of Nested if-else Statement -:</h5>
                    <img className='mt-4' src={nested_if_else_img} alt="" />
                </div>
            </div>
            <div className="ladder-if-else-condtion mt-5">
                <h5>Ladder if-else Statement -:</h5>
                <p>A ladder allows you to evaluate multiple test expressions and execute different statements. Here, when the if statement's test expression is evaluated to be True, the body of only the if statement gets executed. Otherwise, it moves on to check the expression of the else if statement.</p>
                <div className='syntax-ladder-if-else'>
                    <h5 className='mb-4'>Syntax of Ladder if-else Statement -:</h5>
                    <pre>
                        <b>
                            <strong>if</strong>
                        </b>
                        <span> (</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">condition</em>
                        </i>
                        <span>)</span>
                        <br />
                        <span>{"    "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">statement;</em>
                        </i>
                        <br />
                        <b>
                            <strong>else if</strong>
                        </b>
                        <span> (</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">condition</em>
                        </i>
                        <span>)</span>
                        <br />
                        <span>{"    "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">statement;</em>
                        </i>
                        <br />
                        <span>.</span>
                        <br />
                        <span>.</span>
                        <br />
                        <b>
                            <strong>else</strong>
                        </b>
                        <br />
                        <span>{"    "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">statement;</em>
                        </i>
                        <br />
                    </pre>
                </div>
                <div className='mt-4 flowchart-ladder-if-else'>
                    <h5>Flowchart of if-else Statement -:</h5>
                </div>
                <img className='ladder-if-else-img' src={ladder_if_else_img} alt="" />
            </div>
            <div className='switch-case-statement'>
                <h5>What is switch-case statement?</h5>
                <p>Switch Case statement also know as the selection statement. If use switch case statement then at a time only one option executed. Switch case statement nested also.</p>
                <div className='syntax-switch-case'>
                    <h5 className='mb-4'>Syntax of switch-case statement -:</h5>
                    <pre>
                        <b>
                            <strong>switch</strong>
                        </b>
                        <span> (</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">expression</em>
                        </i>
                        <span>) {"{"}</span>
                        <br />
                        <span>{"    "}</span>
                        <b>
                            <strong>case</strong>
                        </b>
                        <span> </span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">value1:</em>
                        </i>
                        <br />
                        <span>{"        "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">statements;</em>
                        </i>
                        <br />
                        <span>{"    "}</span>
                        <b>
                            <strong>case</strong>
                        </b>
                        <i>
                            <em className="GFGEditorTheme__textItalic"> value2:</em>
                        </i>
                        <br />
                        <span>{"        "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">statements;</em>
                        </i>
                        <br />
                        <span>{"    "}....</span>
                        <br />
                        <span>{"    "}....</span>
                        <br />
                        <span>{"    "}....</span>
                        <br />
                        <span>{"    "}</span>
                        <b>
                            <strong>default:</strong>
                        </b>
                        <br />
                        <span>{"        "}</span>
                        <i>
                            <em className="GFGEditorTheme__textItalic">statements;</em>
                        </i>
                        <br />
                        <span>{"}"}</span>
                        <br />
                    </pre>
                </div>
            </div>
            <div className='flowchart-switch-case mb-4'>
                <h5>Flowchart of Switch Case Statement -:</h5>
                <img className='img-fluid' src={switch_case} alt="" />
            </div>
        </>
    )
}
