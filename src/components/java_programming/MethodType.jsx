import method_type from '../../img/method-type.jpg'


export default function MethodType(){
    return(
        <>
        <div className="method-type">
            <div className="method">
                <h5>What is method ?</h5>
                <p>A method in Java is a set of instructions that can be called for execution using the method name. A Java method can take in data or parameters and return a value. </p>
                <h6><i><b>There are following type of method in java -:</b></i></h6>
                <ul>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> instance method</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> static method</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> special(Constructor) method</i></li>
                </ul>
                <div className='method-type-img mt-5'>
                    <img className='img-fluid' src={method_type} alt="" />
                </div>
                <h6 className='mt-4'><i><b>Syntax -:</b></i></h6>
                <p><i>{"<return-type> <function-name>(<length-of-parameter>) ;"}</i></p>
                <h6 className='mt-3'><i>Method declaration -:</i></h6>
                <p><i>int lenght(int no);</i></p>
                <h6 className='mt-4'><i><b>Method definition -:</b></i></h6>
                <pre className="exec">
                    <code className="java hljs language-java">
                        <span className="hljs-keyword">int</span> length(String name){"{"}
                        {"\n"}
                        <span className="hljs-comment"> &nbsp; &nbsp; return  name.length()</span>
                        {"\n"}
                        {"}"}
                        {"\n"}
                    </code>
                </pre>
            </div>
        </div>
        </>
    )
}
