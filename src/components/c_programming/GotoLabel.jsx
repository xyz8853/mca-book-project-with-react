import goto_level from '../../img/goto-level.webp';

export default function GotoLabel(){
    return(
        <div className="goto-level-statement">
            <div className="goto-head">
                <h5>What is goto lavel?</h5>
                <p>The “goto” statement in C is an example of a jump statement used to change the flow of execution from one block of code to another. It is referred to as an unconditional jump statement. While it can be used to create loops, its main purpose is to control the execution of a program.</p>
                <h6><i><b>Syntax -:</b></i></h6>
                <pre style={{ maxHeight: 600 }}>
                    <code className="c hljs cpp">
                        <span className="hljs-keyword">goto</span> label;{"\n"}... .. ...{"\n"}...
                        .. ...{"\n"}label: {"\n"}statement;{"\n"}
                    </code>
                </pre>
                <div>
                <h6><i><b>Flowchart of goto-level statement -:</b></i></h6>
                <img src={goto_level} alt="" />
                </div>
                
            </div>
        </div>
    )
}