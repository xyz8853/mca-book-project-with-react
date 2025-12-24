

export default function StructureAndUnion(){
    return(
        <>
           <div className="structur-union">
                <div className="struct-keyword">
                    <h5>What is 'struct' keyword in C?</h5>
                    <p>In English Struct is the keyword used to define structure in C. The structure in C is a user-defined datatype that stores different data type variables under one user-defined data type. The Structure variables are used to access the members of the structure.<i>Total size of sturct variable total member of size.</i></p>
                    <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
                    <pre style={{ maxHeight: 600 }}>
                        <code className="c hljs cpp">
                            <span className="hljs-keyword">{"<struct> <struct-name>"}</span> {"{"}
                            {"\n"}
                            {"  "}
                            <span className="hljs-comment">// the body of the loop</span>
                            {"\n"}
                            {"}"}
                            <span className="hljs-keyword"></span>{"<length-of-variable> ;"}
                        </code>
                    </pre>
                    <h6 className="mt-2"><i><b>'Struct' keyword declaration -:</b></i></h6>
                    <pre style={{ maxHeight: 600 }}>
                        <code className="c hljs cpp">
                            <span className="hljs-keyword">struct student</span> {"{"}
                            {"\n"}
                            {"  "}
                            <span className="hljs-comment">//different-2 data-type of varaible</span>
                            {"\n"}
                            {"}"}
                            <span className="hljs-keyword"></span>std1, std2,std3;
                        </code>
                    </pre>
                </div>
                <div className="union-keyword">
                    <h5>What is 'union' keyword in C?</h5>
                    <p>Union is a data type in C programming that allows different data types to be stored in the same memory locations. Union provides an efficient way of reusing the memory location, as only one of its members can be accessed at a time. A union is used almost in the same way you would declare and use a structure.<i>Total size of union variable max size of any member</i></p>
                    <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
                    <pre style={{ maxHeight: 600 }}>
                        <code className="c hljs cpp">
                            <span className="hljs-keyword">{"<union> <struct-name>"}</span> {"{"}
                            {"\n"}
                            {"  "}
                            <span className="hljs-comment">//different-2 data-type variable</span>
                            {"\n"}
                            {"}"}
                            <span className="hljs-keyword"></span>{"<length-of-variable> ;"}
                        </code>
                    </pre>
                    <h6 className="mt-2"><i><b>'Struct' keyword declaration -:</b></i></h6>
                    <pre style={{ maxHeight: 600 }}>
                        <code className="c hljs cpp">
                            <span className="hljs-keyword">union student</span> {"{"}
                            {"\n"}
                            {"  "}
                            <span className="hljs-comment">// the body of the loop</span>
                            {"\n"}
                            {"}"}
                            <span className="hljs-keyword"></span>std1, std2,std3;
                        </code>
                    </pre>
                </div>

           </div>
        </>
    )
}