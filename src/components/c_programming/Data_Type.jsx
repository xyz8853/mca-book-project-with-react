

export default function Data_Type(){
    return(
        <>
            <h5>What is data type?</h5>
            <p>Data type is use to following infromation about data. Data type provide fecility to you store different-2 type value in memory program run time.</p>
            <i>Thare are two type of data-type</i>
            <ul className="data-type">
                <h6>1. Premitive data-type</h6>
                <ul>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> int</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> char</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> float</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> double</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> void</i></li>
                </ul>
                <h6 className="mt-2">2. Derived data-type</h6>
                <ul>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Array</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> String</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Struct</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Union</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Enum</i></li>
                </ul>
            </ul>
            <h5>Introduction each data-type</h5>
            <ul>
                <li>
                    <h6>1. Int (Integer 2byte) Data-Type</h6>
                    <p>An integer type variable can store zero, positive, and negative values without any decimal. In C language, the integer data type is represented by the 'int' keyword, and it can be both signed or unsigned. By default, the value assigned to an integer variable is considered positive if it is unsigned.In C language integer specifier is '%i' or '%d' etc.</p>
                </li>
                <li>
                    <h6>2. Char (Character 1byte) Data-Type</h6>
                    <p>The char data type variable can store a single character. The character must be surrounded by single quotes, like 'A' or 'c', and we use the %c format specifier.In C language, character denoted by 'char' keyword.</p>
                </li>
                <li>
                    <h6>3. Float (4byte) Data-Type</h6>
                    <p>The float keyword is a data type which stores fractional numbers. It is usually 32 bits (4 bytes) long, and it can store positive and negative numbers with values between 3.4e−038 and 3.4e+038.In C language, Float denoted by 'float' keyword.In c language float specifier is '%f'.</p>
                </li>
                <li>
                    <h6>4. Double (8byte) Data-Type</h6>
                    <p>The double data type or double refers to that data type in the C language that helps in storing high-precision sorts of floating-point numbers or data in the computer memory. This data type is also known as double because it is capable of holding double the size of info and data as compared to the float.In C language Double denoted by 'double'.In c language double specifier is '%lf'.</p>
                </li>
                <li>
                    <h6>5. Void (2byte) Data-Type</h6>
                    <p>The void type, in several programming languages derived from C and Algol68, is the return type of a function that returns normally, but does not provide a result value to its caller. Usually such functions are called for their side effects, such as performing some task or writing to their output parameters.</p>
                </li>
            </ul>

        </>
    )
}