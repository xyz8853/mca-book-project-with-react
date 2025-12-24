


export default function AccessModifier(){
    return(
        <>
            <div className="access-modifier">
                <div className="intro">
                    <h5>Access Modifier ?</h5>
                    <p>Access modifiers in Java are the keywords that are used for controlling the use of the methods, constructors, fields, and methods in a class.</p>
                    <h6><i>Ther are following type of access modifier -:</i></h6>
                    <ul>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> final</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> static</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> abstract</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> synchronized</i></li>
                    </ul>
                </div>
                <div className="final-modifier">
                    <h5>Final access modifier ?</h5>
                    <i><b>How many type use 'final' keyword -:</b></i>
                    <ul>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> final with variable</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> final with method</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> final with class</i></li>
                    </ul>
                </div> 
                <div className="final-modifier">
                    <h5>Static access modifier ?</h5>
                    <i><b>How many type use 'static' keyword -:</b></i>
                    <ul>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> static with variable</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> static with method</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> static with class</i></li>
                    </ul>
                </div>
                <div className="final-modifier">
                    <h5>Abstract access modifier ?</h5>
                    <i><b>How many type use 'abstract' keyword -:</b></i>
                    <ul>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> abstract with method</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> abstract with class</i></li>
                    </ul>
                </div>  
            </div>
        </>
    )
}