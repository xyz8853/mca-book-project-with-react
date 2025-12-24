

export default function UserDefineFunction(){
    return(
        <>
            <h5>What is user define function ?</h5>
            <p>It means this function also declared by user that is called user define function.</p>
            <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
            <p><i>{"<data-type> <function-name>(<length-of-parameter>) ;"}</i></p>
            <h6 className="mt-2"><i><b>Function Declaration -:</b></i></h6>
            <p><i>{"int square() ;"}</i></p>
            <h6 className="mt-2"><i>There are following type of user define function -:</i></h6>
            <ul>
                <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Not return type Not Parameterized</i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Not return type Yes Parameterized</i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Yes return  type Not Parameterized</i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Yes return type Yes Parameterized</i></li>
            </ul>
            <div className="type-first mt-2">
                <h5><b>1.</b> Not return type Not Parameterized -:</h5>   
                <ul>
                    <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
                    <p><i>{"<data-type> <function-name>(<length-of-parameter>) ;"}</i></p>
                    <h6 className="mt-2"><i><b>Function Declaration -:</b></i></h6>
                    <p><i>{"void square() ;"}</i></p>
                </ul> 
            </div>
            <div className="type-second mt-3">
                <h5><b>2.</b> Not return type Yes Parameterized -:</h5>  
                <ul>
                    <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
                    <p><i>{"<data-type> <function-name>(<length-of-parameter>) ;"}</i></p>
                    <h6 className="mt-2"><i><b>Function Declaration -:</b></i></h6>
                    <p><i>{"void square(int no) ;"}</i></p>
                </ul>  
            </div>
            <div className="type-thired mt-3">
                <h5><b>3.</b> Yes return type Not Parameterized -:</h5>  
                <ul>
                    <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
                    <p><i>{"<data-type> <function-name>(<length-of-parameter>) ;"}</i></p>
                    <h6 className="mt-2"><i><b>Function Declaration -:</b></i></h6>
                    <p><i>{"int menu() ;"}</i></p>
                </ul>  
            </div>
            <div className="type-thired mt-3">
                <h5><b>4.</b> Yes return type Yes Parameterized -:</h5>  
                <ul>
                    <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
                    <p><i>{"<data-type> <function-name>(<length-of-parameter>) ;"}</i></p>
                    <h6 className="mt-2"><i><b>Function Declaration -:</b></i></h6>
                    <p><i>{"int addition(int no1, int no2) ;"}</i></p>
                </ul>  
            </div>
        </>
    )
}