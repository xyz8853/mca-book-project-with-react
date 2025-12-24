


export default function Macros(){
    return(
        <>
            <div className="macros-head">
                <div className="macros">
                    <h5>What is 'macros' in C?</h5>
                    <p>A macro in C is a code snippet defined using the #define directive that is replaced with a specified value or expression during compilation. Here's an example: #define PI 3.1415.</p>
                    <h6 className="mt-2"><i><b>There are following type of 'macros' in C -:</b></i></h6>
                    <ul>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> macros with constant</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> macros with parameter</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> multi-line macros</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> function like macros</i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}