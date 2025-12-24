import method_reference_table from '../../img/method-reference-t.jpg';

export default function MethodReference(){
    return(
        <>
            <div className="method-reference-head">
                <div className="method-reference-body">
                    <div className="about-method-reference">
                        <h5>What is Method Reference(::)?</h5>
                        <p>As we have seen in Lambda expression topic that we use lambda expressions to implement Functional interfaces with minimum lines of code and even to get better code readability. Similarly, we can use Method Reference(::) Java 8 to implement Functional interfaces with even lesser code again than lambda expressions and this time we get the benefit of code re-usability as well, because we don’t provide an implementation for functional interface. Instead, we provide reference to already existing method (with similar argument types) to simplify the implementation of the functional interface using a double colon (::) operator. This process of providing reference to pre-existing method is called Method reference.
                            From the above definition it is clear that while applying Method References our focus is always on the pre-existing methods which are well suited to the implementation of Functional Interface. In fact, pre-existing methods should have same arguments in number & type and their return type must match the return type of the functional interface’s abstract method.
                        <i>To summarize, when using method references to implement a functional interface, the method signature must match exactly, which includes:</i></p>
                        <ul>
                            <li><i><b>1.Same Number Of Argument</b></i></li>
                            <li><i><b>2.Same Argument Type</b></i></li>
                            <li><i><b>3.Same Return Type</b></i></li>
                        </ul>
                    </div>
                    <div class="code-embed-wrapper"> 
                        <div class="code-embed-infos"></div> 
                            <pre class="code-embed-pre line-numbers language-java" data-line="12,15" data-start="1" data-line-offset="0" tabindex="0"><code class="code-embed-code language-java"><span class="token keyword">interface</span> <span class="token class-name">A</span> <span class="token punctuation">{`{`}</span>
                              <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                              <span class="token punctuation">{`}`}</span>

                              <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{`{`}</span>

                              <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> info<span class="token punctuation">)</span> <span class="token punctuation">{`{`}</span>
                              <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
                              <span class="token punctuation">{`}`}</span>

                             <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">{`(`}</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">{`)`}</span> <span class="token punctuation">{`{`}</span>
                             <span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token punctuation">{`(`}</span><span class="token class-name">String</span> s<span class="token punctuation">{`)`}</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">{`(`}</span>s<span class="token punctuation">{`)`}</span><span class="token punctuation">;</span> <span class="token comment">//providing implementation of getName(String name) using Lambda Expression</span>
                             a<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token string">"SAM is executing"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                             <span class="token class-name">A</span> a1 <span class="token operator">=</span> <span class="token class-name">Test</span><span class="token operator">::</span><span class="token function">getInfo</span><span class="token punctuation">;</span> <span class="token comment">// refering to pre-existing getInfo(String info) of class Test as arguments are same as getName(String name)</span>
                             a1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token string">"getInfo() of Test class is executing"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                             <span class="token punctuation">{`}`}</span>
                             <span class="token punctuation">{`}`}</span></code>
                             <div aria-hidden="true" data-range="12" class=" line-highlight" style={{width:'1355px'}}></div><div aria-hidden="true" data-range="15" class=" line-highlight" style={{width:'1355px'}}></div>
                        </pre>
                        <h6><i><b>Note::-</b></i></h6>
                        <p>In the above code snippet, Interface A, is a functional interface. The Single abstract method(SAM), getName(String name) of interface A has the same argument in number & type as the pre-existing method getInfo(String info) of class Test. Therefore, we can refer getInfo(String info) as an implementation of Functional interface A without any problem. Hence, the syntax for Method reference will be ClassName::methodName if it is static method.</p>
                    </div>
                    <div className="syntax-method-reference">
                        <h5>Syntax to write Method References</h5>
                        <p>Before knowing how to write them, let’s first categorize the Method Reference in Java 8. Here, syntax to write Method Reference in Java 8 is different in different cases. Typically, we can provide Method references in three ways, sometimes called the types of it.</p>
                        <ul>
                            <li><b><i>1. Instance Method Reference /non-static method reference</i></b></li>
                            <li><b><i>2. Static Method Reference</i></b></li>
                            <li><b><i>3. Constructor Method Reference</i></b></li>
                        </ul>
                        <h6><b><i> try to observe them one by one from below table.</i></b></h6>
                        <div className="method-ref-table-img">
                            <img className="img-fluid" src={method_reference_table} alt="" />
                        </div>
                    </div>
                    <div className='example-method-ref'>
                      <div className='method-ref-with-static-method'>
                        <h6><i><b>Method reference to a static method of a class:-</b></i></h6>
                        <div className="code-embed-wrapper">
                            {" "}
                            <div className="code-embed-infos"> </div>{" "}
                            <pre
                                className="code-embed-pre line-numbers language-java"
                                data-line="16,20"
                                data-start={1}
                                data-line-offset={0}
                                tabIndex={0}
                            >
                                <code className="code-embed-code language-java">
                                <span className="token keyword">interface</span>{" "}
                                <span className="token class-name">A</span>{" "}
                                <span className="token punctuation">{"{"}</span>
                                {"\n"}
                                {"\t"}
                                <span className="token keyword">public</span>{" "}
                                <span className="token keyword">boolean</span>{" "}
                                <span className="token function">checkSingleDigit</span>
                                <span className="token punctuation">(</span>
                                <span className="token keyword">int</span> x
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                <span className="token punctuation">{"}"}</span>
                                {"\n"}
                                {"\n"}
                                <span className="token keyword">class</span>{" "}
                                <span className="token class-name">Digit</span>{" "}
                                <span className="token punctuation">{"{"}</span>
                                {"\n"}
                                {"\t"}
                                <span className="token keyword">public</span>{" "}
                                <span className="token keyword">static</span>{" "}
                                <span className="token keyword">boolean</span>{" "}
                                <span className="token function">isSingleDigit</span>
                                <span className="token punctuation">(</span>
                                <span className="token keyword">int</span> x
                                <span className="token punctuation">)</span>{" "}
                                <span className="token punctuation">{"{"}</span>
                                {"\n"}
                                {"\t"}
                                {"    "}
                                <span className="token keyword">return</span> x{" "}
                                <span className="token operator">&gt;</span>{" "}
                                <span className="token operator">-</span>
                                <span className="token number">10</span>{" "}
                                <span className="token operator">&amp;&amp;</span> x{" "}
                                <span className="token operator">&lt;</span>{" "}
                                <span className="token number">10</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                <span className="token punctuation">{"}"}</span>
                                {"\n"}
                                <span className="token punctuation">{"}"}</span>
                                {"\n"}
                                {"\n"}
                                <span className="token keyword">public</span>{" "}
                                <span className="token keyword">class</span>{" "}
                                <span className="token class-name">TestStaticMethodReference</span>{" "}
                                <span className="token punctuation">{"{"}</span>
                                {"\n"}
                                {"\n"}
                                {"\t"}
                                <span className="token keyword">public</span>{" "}
                                <span className="token keyword">static</span>{" "}
                                <span className="token keyword">void</span>{" "}
                                <span className="token function">main</span>
                                <span className="token punctuation">(</span>
                                <span className="token class-name">String</span>
                                <span className="token punctuation">[</span>
                                <span className="token punctuation">]</span> args
                                <span className="token punctuation">)</span>{" "}
                                <span className="token punctuation">{"{"}</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token comment">//*** Using Lambda Expression ***//</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token class-name">A</span> a1{" "}
                                <span className="token operator">=</span>{" "}
                                <span className="token punctuation">(</span>x
                                <span className="token punctuation">)</span>{" "}
                                <span className="token operator">-&gt;</span>{" "}
                                <span className="token punctuation">{"{"}</span>{" "}
                                <span className="token keyword">return</span> x{" "}
                                <span className="token operator">&gt;</span>{" "}
                                <span className="token operator">-</span>
                                <span className="token number">10</span>{" "}
                                <span className="token operator">&amp;&amp;</span> x{" "}
                                <span className="token operator">&lt;</span>{" "}
                                <span className="token number">10</span>
                                <span className="token punctuation">;</span>
                                <span className="token punctuation">{"}"}</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token class-name">System</span>
                                <span className="token punctuation">.</span>out
                                <span className="token punctuation">.</span>
                                <span className="token function">println</span>
                                <span className="token punctuation">(</span>a1
                                <span className="token punctuation">.</span>
                                <span className="token function">checkSingleDigit</span>
                                <span className="token punctuation">(</span>
                                <span className="token number">10</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token comment">//*** Using Method Reference ***//</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token class-name">A</span> a2{" "}
                                <span className="token operator">=</span>{" "}
                                <span className="token class-name">Digit</span>
                                <span className="token operator">::</span>
                                <span className="token function">isSingleDigit</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token class-name">System</span>
                                <span className="token punctuation">.</span>out
                                <span className="token punctuation">.</span>
                                <span className="token function">println</span>
                                <span className="token punctuation">(</span>a2
                                <span className="token punctuation">.</span>
                                <span className="token function">checkSingleDigit</span>
                                <span className="token punctuation">(</span>
                                <span className="token number">9</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                <span className="token punctuation">{"}"}</span>
                                {"\n"}
                                <span className="token punctuation">{"}"}</span>
                                </code>
                                <div
                                aria-hidden="true"
                                data-range={16}
                                className=" line-highlight"
                                style={{ width: 596 }}
                                />
                                <div
                                aria-hidden="true"
                                data-range={20}
                                className=" line-highlight"
                                style={{ width: 596 }}
                                />
                            </pre>{" "}
                            </div>
                      </div>
                    <div className='method-ref-with-instance-method'>
                        <h6><b><i>Method Rerence with Instance Method:-</i></b></h6>
                        <div className="code-embed-wrapper">
                        {" "}
                        <div className="code-embed-infos"> </div>{" "}
                        <pre
                            className="code-embed-pre line-numbers language-java"
                            data-line="13,17"
                            data-start={1}
                            data-line-offset={0}
                            tabIndex={0}
                        >
                            <code className="code-embed-code language-java">
                            <span className="token keyword">interface</span>{" "}
                            <span className="token class-name">B</span>{" "}
                            <span className="token punctuation">{"{"}</span>
                            {"\n"}
                            {"    "}
                            <span className="token keyword">public</span>
                            {"  "}
                            <span className="token keyword">void</span>{" "}
                            <span className="token function">add</span>
                            <span className="token punctuation">(</span>
                            <span className="token keyword">int</span> x
                            <span className="token punctuation">,</span>{" "}
                            <span className="token keyword">int</span> y
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">;</span>
                            {"\n"}
                            <span className="token punctuation">{"}"}</span>
                            {"\n"}
                            {"\n"}
                            <span className="token keyword">class</span>{" "}
                            <span className="token class-name">Addition</span>{" "}
                            <span className="token punctuation">{"{"}</span>
                            {"\n"}
                            {"\t"}
                            <span className="token keyword">public</span>{" "}
                            <span className="token keyword">void</span>{" "}
                            <span className="token function">sum</span>
                            <span className="token punctuation">(</span>
                            <span className="token keyword">int</span> a
                            <span className="token punctuation">,</span>{" "}
                            <span className="token keyword">int</span> b
                            <span className="token punctuation">)</span>{" "}
                            <span className="token punctuation">{"{"}</span>
                            {"\n"}
                            {"\t"}
                            {"    "}
                            <span className="token class-name">System</span>
                            <span className="token punctuation">.</span>out
                            <span className="token punctuation">.</span>
                            <span className="token function">println</span>
                            <span className="token punctuation">(</span>
                            <span className="token string">"The sum is :"</span>
                            <span className="token operator">+</span>
                            <span className="token punctuation">(</span>a
                            <span className="token operator">+</span>b
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"\t"}
                            <span className="token punctuation">{"}"}</span>
                            {"\n"}
                            <span className="token punctuation">{"}"}</span>
                            {"\n"}
                            {"\n"}
                            <span className="token keyword">public</span>{" "}
                            <span className="token keyword">class</span>{" "}
                            <span className="token class-name">TestInstanceMethodReference</span>{" "}
                            <span className="token punctuation">{"{"}</span>
                            {"\n"}
                            {"\n"}
                            {"\t"}
                            <span className="token keyword">public</span>{" "}
                            <span className="token keyword">static</span>{" "}
                            <span className="token keyword">void</span>{" "}
                            <span className="token function">main</span>
                            <span className="token punctuation">(</span>
                            <span className="token class-name">String</span>
                            <span className="token punctuation">[</span>
                            <span className="token punctuation">]</span> args
                            <span className="token punctuation">)</span>{" "}
                            <span className="token punctuation">{"{"}</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            <span className="token class-name">Addition</span> addition{" "}
                            <span className="token operator">=</span>{" "}
                            <span className="token keyword">new</span>{" "}
                            <span className="token class-name">Addition</span>
                            <span className="token punctuation">(</span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            <span className="token comment">//*** Using Lambda Expression ***//</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            <span className="token class-name">B</span> b1{" "}
                            <span className="token operator">=</span>{" "}
                            <span className="token punctuation">(</span>a
                            <span className="token punctuation">,</span>b
                            <span className="token punctuation">)</span>{" "}
                            <span className="token operator">-&gt;</span>{" "}
                            <span className="token class-name">System</span>
                            <span className="token punctuation">.</span>out
                            <span className="token punctuation">.</span>
                            <span className="token function">println</span>
                            <span className="token punctuation">(</span>
                            <span className="token string">"The sum is :"</span>
                            <span className="token operator">+</span>
                            <span className="token punctuation">(</span>a
                            <span className="token operator">+</span>b
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}b1<span className="token punctuation">.</span>
                            <span className="token function">add</span>
                            <span className="token punctuation">(</span>
                            <span className="token number">10</span>
                            <span className="token punctuation">,</span>{" "}
                            <span className="token number">14</span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            <span className="token comment">//*** Using Method Reference ***//</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            <span className="token class-name">B</span> b2{" "}
                            <span className="token operator">=</span> addition
                            <span className="token operator">::</span>
                            <span className="token function">sum</span>
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}b2<span className="token punctuation">.</span>
                            <span className="token function">add</span>
                            <span className="token punctuation">(</span>
                            <span className="token number">100</span>
                            <span className="token punctuation">,</span>{" "}
                            <span className="token number">140</span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">;</span>
                            {"\n"}
                            {"\t"}
                            <span className="token punctuation">{"}"}</span>
                            {"\n"}
                            <span className="token punctuation">{"}"}</span>
                            </code>
                            <div
                            aria-hidden="true"
                            data-range={13}
                            className=" line-highlight"
                            style={{ width: 672 }}
                            />
                            <div
                            aria-hidden="true"
                            data-range={17}
                            className=" line-highlight"
                            style={{ width: 672 }}
                            />
                        </pre>{" "}
                        </div>
                    </div>
                    <div className='method-ref-with-constructor-method'>
                        <h6><b><i>Constructor Reference:-</i></b></h6>
                        <div className="code-embed-wrapper">
                            {" "}
                            <div className="code-embed-infos"> </div>{" "}
                            <pre
                                className="code-embed-pre line-numbers language-java"
                                data-line="30,32,36,38"
                                data-start={1}
                                data-line-offset={0}
                                tabIndex={0}
                            >
                                <code className="code-embed-code language-java">
                                <span className="token keyword">interface</span>{" "}
                                <span className="token class-name">C</span>{" "}
                                <span className="token punctuation">{"{"}</span>
                                {"\n"}
                                {"\t"}
                                <span className="token keyword">public</span>{" "}
                                <span className="token class-name">Employee</span>{" "}
                                <span className="token function">getEmployee</span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                <span className="token punctuation">{"}"}</span>
                                {"\n"}
                                {"\n"}
                                <span className="token keyword">interface</span>{" "}
                                <span className="token class-name">D</span>{" "}
                                <span className="token punctuation">{"{"}</span>
                                {"\n"}
                                {"\t"}
                                <span className="token keyword">public</span>{" "}
                                <span className="token class-name">Employee</span>{" "}
                                <span className="token function">getEmployee</span>
                                <span className="token punctuation">(</span>
                                <span className="token class-name">String</span> name
                                <span className="token punctuation">,</span>{" "}
                                <span className="token keyword">int</span> age
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                <span className="token punctuation">{"}"}</span>
                                {"\n"}
                                {"\n"}
                                <span className="token keyword">class</span>{" "}
                                <span className="token class-name">Employee</span>{" "}
                                <span className="token punctuation">{"{"}</span>
                                {"\n"}
                                {"\t"}
                                <span className="token class-name">String</span> eName
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                <span className="token keyword">int</span> eAge
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                {"\n"}
                                {"\t"}
                                <span className="token keyword">public</span>{" "}
                                <span className="token class-name">Employee</span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">{"{"}</span>
                                <span className="token punctuation">{"}"}</span> {"\n"}
                                {"\t"}
                                {"\n"}
                                {"\t"}
                                <span className="token keyword">public</span>{" "}
                                <span className="token class-name">Employee</span>
                                <span className="token punctuation">(</span>
                                <span className="token class-name">String</span> eName
                                <span className="token punctuation">,</span>{" "}
                                <span className="token keyword">int</span> eAge
                                <span className="token punctuation">)</span>{" "}
                                <span className="token punctuation">{"{"}</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token keyword">this</span>
                                <span className="token punctuation">.</span>eName{" "}
                                <span className="token operator">=</span> eName
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token keyword">this</span>
                                <span className="token punctuation">.</span>eAge{" "}
                                <span className="token operator">=</span> eAge
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                <span className="token punctuation">{"}"}</span>
                                {"\n"}
                                {"\t"}
                                {"\n"}
                                {"\t"}
                                <span className="token keyword">public</span>{" "}
                                <span className="token keyword">void</span>{" "}
                                <span className="token function">getInfo</span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuation">)</span>{" "}
                                <span className="token punctuation">{"{"}</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token class-name">System</span>
                                <span className="token punctuation">.</span>out
                                <span className="token punctuation">.</span>
                                <span className="token function">println</span>
                                <span className="token punctuation">(</span>
                                <span className="token string">"I am a method of class Employee"</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                <span className="token punctuation">{"}"}</span>
                                {"\n"}
                                <span className="token punctuation">{"}"}</span>
                                {"\n"}
                                {"\n"}
                                <span className="token keyword">public</span>{" "}
                                <span className="token keyword">class</span>{" "}
                                <span className="token class-name">TestConstructorReference</span>{" "}
                                <span className="token punctuation">{"{"}</span>
                                {"\n"}
                                {"\n"}
                                {"\t"}
                                <span className="token keyword">public</span>{" "}
                                <span className="token keyword">static</span>{" "}
                                <span className="token keyword">void</span>{" "}
                                <span className="token function">main</span>
                                <span className="token punctuation">(</span>
                                <span className="token class-name">String</span>
                                <span className="token punctuation">[</span>
                                <span className="token punctuation">]</span> args
                                <span className="token punctuation">)</span>{" "}
                                <span className="token punctuation">{"{"}</span>
                                {"\t"}
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token comment">//*** Using Lambda Expression ***//</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token class-name">C</span> c1{" "}
                                <span className="token operator">=</span>{" "}
                                <span className="token punctuation">(</span>
                                <span className="token punctuation">)</span>{" "}
                                <span className="token operator">-&gt;</span>{" "}
                                <span className="token keyword">new</span>{" "}
                                <span className="token class-name">Employee</span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}c1<span className="token punctuation">.</span>
                                <span className="token function">getEmployee</span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">.</span>
                                <span className="token function">getInfo</span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token class-name">D</span> d1{" "}
                                <span className="token operator">=</span>{" "}
                                <span className="token punctuation">(</span>name
                                <span className="token punctuation">,</span>age
                                <span className="token punctuation">)</span>{" "}
                                <span className="token operator">-&gt;</span>{" "}
                                <span className="token keyword">new</span>{" "}
                                <span className="token class-name">Employee</span>
                                <span className="token punctuation">(</span>name
                                <span className="token punctuation">,</span>age
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}d1<span className="token punctuation">.</span>
                                <span className="token function">getEmployee</span>
                                <span className="token punctuation">(</span>
                                <span className="token string">"Tony"</span>
                                <span className="token punctuation">,</span>{" "}
                                <span className="token number">34</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">.</span>
                                <span className="token function">getInfo</span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token comment">//*** Using Method Reference ***//</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token class-name">C</span> c2{" "}
                                <span className="token operator">=</span>{" "}
                                <span className="token class-name">Employee</span>
                                <span className="token operator">::</span>
                                <span className="token keyword">new</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}c2<span className="token punctuation">.</span>
                                <span className="token function">getEmployee</span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">.</span>
                                <span className="token function">getInfo</span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}
                                <span className="token class-name">D</span> d2{" "}
                                <span className="token operator">=</span>{" "}
                                <span className="token class-name">Employee</span>
                                <span className="token operator">::</span>
                                <span className="token keyword">new</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                {"\t"}d2<span className="token punctuation">.</span>
                                <span className="token function">getEmployee</span>
                                <span className="token punctuation">(</span>
                                <span className="token string">"Tony"</span>
                                <span className="token punctuation">,</span>{" "}
                                <span className="token number">34</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">.</span>
                                <span className="token function">getInfo</span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuation">)</span>
                                <span className="token punctuation">;</span>
                                {"\n"}
                                {"\t"}
                                <span className="token punctuation">{"}"}</span>
                                {"\n"}
                                <span className="token punctuation">{"}"}</span>
                                </code>
                                <div
                                aria-hidden="true"
                                data-range={30}
                                className=" line-highlight"
                                style={{ width: 644 }}
                                />
                                <div
                                aria-hidden="true"
                                data-range={32}
                                className=" line-highlight"
                                style={{ width: 644 }}
                                />
                                <div
                                aria-hidden="true"
                                data-range={36}
                                className=" line-highlight"
                                style={{ width: 644 }}
                                />
                                <div
                                aria-hidden="true"
                                data-range={38}
                                className=" line-highlight"
                                style={{ width: 644 }}
                                />
                            </pre>{" "}
                            </div>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}