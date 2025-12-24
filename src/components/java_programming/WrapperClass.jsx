

export default function WrapperClass(){
    return(
        <>
            <div className="wrapper-class-head">
                <h5>What is the wrapper class in java?</h5>
                <p>A wrapper class in Java is a class that encapsulates a primitive data type within an object. Primitive data types in Java, such as int, char, boolean, double, etc., are not objects. However, there are situations in Java programming where primitive values need to be treated as objects, for example, when working with Java Collections Framework (like ArrayList or HashMap), which only store objects, or with generics.</p>
                <h6><i><b>There are following type of Operator.</b></i></h6>
                <ul className="wrapper-class-list">
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i>Byte</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i>Short</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i>Integer</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i>Long</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i>Float</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i>Double</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i>Character</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i>Boolean</i></li>
                </ul>
            </div>
        </>
    )
}