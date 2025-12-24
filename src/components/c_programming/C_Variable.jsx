import valid_invalid from "../../img/valid_invalid_variable.png";



export default function C_Variable(){
    return(
        <>
            <h5>What is Variable?</h5>
            <p>Variable is a memory location whitch hold some value assignment by operating system.Each variable is unique address.
                If we want to store 'new' value in variable 'old' value override and 'new' value stored.
                Variable allocate in memory programm run time;
                <i>Variable store different-2 type of value it is depend upon Data-Type.</i>
            </p>
            <h6><strong>Syntax -:</strong></h6>
            <p><em>{"<data-type> <variable-name>;"}</em></p>
            <h6>Variable Declaration Example -:</h6>
            <ul>
                <li>int no;</li>
                <li>float price;</li>
                <li>char symbol;</li>
            </ul>
            <h6>Variable initialization -:</h6>
            <ul>
                <li>int no = 100;</li>
                <li>char ch = 'A';</li>
                <li>float amount = 12500.50;</li>
            </ul>
            <h5>Valid And Invalid Variable declaration in C?</h5>
            <div>
                <img src={valid_invalid} alt="" />
            </div>
        </>
    )
}