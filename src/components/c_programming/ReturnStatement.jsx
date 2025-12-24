


export default function ReturnStatement(){
    return(
        <>
        <div className="return-head">
            <div className="return-keyword">
                <h5>What is the 'return' keyword in C?</h5>
                <p>The return keyword finishes the execution of a function, and can be used to return a value from a function.</p>
                <h6 className="mt-2"><i><b>Example -:</b></i></h6>
                <pre style={{ maxHeight: 600 }}>
                    <code className="c hljs cpp">
                        <span className="hljs-keyword">int main</span> {"{"}
                        {"\n"}
                        {"  "}
                            <span className="hljs-comment">// the body of the  main</span>
                        {"\n"}
                            <span className="hljs-keyword">return 100;</span><br/>
                        {"}"}     
                    </code>
                </pre>
            </div>
        </div>
        </>
    )
}