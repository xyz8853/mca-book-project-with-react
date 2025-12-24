import storage_class from '../../img/storage-class.png'


export default function StorageClass(){
    return(
        <>
            <div className="storage-class">
                <h5>Storage Class in C?</h5>
                <p>Storage class in the C language defines the location, lifetime and other specific attributes of a variable. Knowledge of the storage class is important in accessing a block of code. A basic understanding of storage classes in the C language can help you answer questions confidently during interviews .</p>
                <h6 className="mt-2"><i><b>Type of storage class in C -:</b></i></h6>
                <ul>
                    <li><i>auto</i></li>
                    <li><i>register</i></li>
                    <li><i>static</i></li>
                    <li><i>extern</i></li>
                </ul>
                <div className="storage-class-img">
                    <img className='img-fluid' src={storage_class} alt="" />
                </div>
                <div className="auto-keyword mt-3">
                    <h5><b>1.</b> 'Auto' keyword use in C -:</h5>
                    <p>The auto keyword in C relates to storage class. There are different storage classes which determine how long an object remains in memory. The auto storage class is the default if you do not specify a different class, such as static.</p>
                    <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
                       <i><p><i>{"auto <data-type> <variable-name> ;"}</i></p></i> 
                    <h6 className="mt-2"><i><b>'Auto' keyword declaration -:</b></i></h6>
                       <i><p><i>{"auto int no ;"}</i></p></i> 
                </div>
                <div className="auto-keyword mt-3">
                    <h5><b>2.</b> 'Register' keyword use in C -:</h5>
                    <p>When used, register is typically for loop counters, or possibly for other very frequently used variables in the code.</p>
                    <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
                       <i><p><i>{"register <data-type> <variable-name> ;"}</i></p></i> 
                    <h6 className="mt-2"><i><b>'Register' keyword declaration -:</b></i></h6>
                       <i><p><i>{"register int no ;"}</i></p></i> 
                </div>
                <div className="auto-keyword mt-3">
                    <h5><b>3.</b> 'Static' keyword use in C -:</h5>
                    <p> A static variable preserves its previous value in its previous scope and is not initialized again in the new scope.</p>
                    <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
                       <i><p><i>{"static <data-type> <variable-name> ;"}</i></p></i> 
                    <h6 className="mt-2"><i><b>'Static' keyword declaration -:</b></i></h6>
                       <i><p><i>{"static int no ;"}</i></p></i> 
                </div>
                <div className="auto-keyword mt-3">
                    <h5><b>3.</b> 'Extern' keyword use in C -:</h5>
                    <p>The extern keyword in C is used to declare a variable as a global variable such that a variable declared in another scope of the same file or another file can be accessed from anywhere in the program. The variables or functions declared with the extern keyword in C will be linked externally(external linkage).</p>
                    <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
                       <i><p><i>{"extern <data-type> <variable-name> ;"}</i></p></i> 
                    <h6 className="mt-2"><i><b>'Static' keyword declaration -:</b></i></h6>
                       <i><p><i>{"extern int no ;"}</i></p></i> 
                </div>
            </div>
        </>
    )
}