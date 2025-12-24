
import string_methods_name from '../../img/all-string-class-methods.jpg';
import diff_string_buffer from '../../img/string-buffer-diff.png';
import string_extends_interface from '../../img/string-extends.png';

export default function StringAllConcept(){
    return(
        <>
        <div className="string-class-head">
            <div className="string-def">
                <h5>Use of string class in java ?</h5>
                <p>The String class in Java is used to create and manipulate sequences of characters. It is one of the most commonly used classes in Java. Objects of the String class are immutable, which means they cannot be changed once created.</p>
                <h6><i><b>example -:</b></i></h6>
                <ul>
                    <li><b>1.</b> String str1 = new String("xyz");</li>
                    <li><b>2.</b> String str2 = "pqr";</li>
                    <li><b>3.</b> String str3;</li>
                    <li><b>4.</b> str3 = "abc"</li>
                </ul>
                <h5><i><b>Key Features of the String Class</b></i></h5>
                <ul>
                    <li>
                        <h6><i><b>1.Immutable</b></i></h6>
                        <p>Immutable means that once a String object is created, its value cannot be changed.</p>
                    </li>
                    <li>
                        <h6><i><b>2.Thread-Safe</b></i></h6>
                        <p>String in Java is thread-safe because it is immutable, allowing safe access by multiple threads without synchronization.</p>
                    </li>
                    <li>
                        <h6><i><b>3.Supports Various Utility Methods</b></i></h6>
                        <p>String is a predefined final class in Java present in java.lang package. It provides various methods to create, manipulate, and compare strings, like length(), charAt(), concat(), equals(), etc.</p>
                    </li>
                    <li>
                        <h6><i><b>4.Implements Interfaces</b></i></h6>
                        <p>The String class in Java implements three important interfaces.</p>
                        <h6><i><b>4.1.CharSequence:</b></i></h6>
                        <p>Allows access to characters in the string using charAt(), length(), etc.</p>
                        <h6><i><b>4.2.Comparable{`<String>`}:</b></i></h6>
                        <p>Enables comparing two strings lexicographically using compareTo()</p>
                        <h6><i><b>4.3.Serializable:</b></i></h6>
                        <p> Allows string objects to be converted into a byte stream.</p>
                    </li>
                    <li>
                        <img className='img-fluid' src={string_extends_interface} alt="" />
                    </li>
                </ul>
                <div className='string-class-methods'>
                    <h5><i><b>Some String class Methods:-</b></i></h5>
                    <img className='img-fluid' src={string_methods_name} alt="" />
                </div>
                <div className='string-class-constructors mt-3'>
                    <h5><i><b>Some String Class Constructor:-</b></i></h5>
                    <img src="" alt="" />
                </div>
                <div className='different-string-buffere'>
                    <h5><i><b>Difference between String and StringBuffer:-</b></i></h5>
                    <img className='img-fluid' src={diff_string_buffer} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}