import processCode from '../../img/source-code.png';

export default function CompilerAndPreprocessor(){
    return(
        <>
            <h5>What is Preprocessor (#)?</h5>
            <p># symbol is a special symbol in C language, that is called preprocessor.
                preprocessor process our source code after that send the out put to 'Compiler'.    
                <i>Preprocessor process our source code after create a '.i' file.</i>
             </p>

             <h5>What is Compiler?</h5>
             <p>A compiler is a software that converts the source code to the object code. In other words, we can say that it converts the high-level language to machine/binary language. Moreover, it is necessary to perform this step to make the program executable. This is because the computer understands only binary language.</p>
             <div className="process-code-img">
                <img src={processCode} alt="" />
             </div>
        </>
    )
}