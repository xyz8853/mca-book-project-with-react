

export default function IntroductionToArray(){
    return(
        <div className="array-header">
            <div className="introduction">
                <h5>What is Array in C?</h5>
                <p>In programming language some we need to same data-type multiple variable then we can use the 'array' concept. Array store the 'homegenious' type of value. Array index start from '0' and last 'length-1'. Array declared by using the 'square' braket that is called 'subscript' operator. </p>
                <h6><i><b>There are following type of array -:</b></i></h6>
                <ul>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Single Diamentional Array</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Two Diamentional Array</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Multi Diamentional Array</i></li>
                </ul>
                <div className="array-single">
                    <h5>1. Single Diamentional Array -:</h5>
                    <h6><i><b>Syntax -:</b></i></h6>
                    <p><i>{"<data-type> <array-name>[length-of-array];"}</i></p>
                    <h6 className="mt-2"><i><b>Example -:</b></i></h6>
                    <p>int arr[5];</p>
                    <h6 className="mt-2"><i><b>Array Initialization -:</b></i></h6>
                    <p><b>1. </b>int arr[5] = {"{10,20,30,40,50}"};</p>
                    <p><b>2. </b>int arr[] =  {" {10,20,30,40,50,60,70}"};</p>
                </div>
                <div className="array-two">
                    <h5>2. Two Diamentional Array -:</h5>
                    <h6><i><b>Syntax -:</b></i></h6>
                    <p><i>{"<data-type> <array-name> [row][column]"}</i></p>
                    <h6 className="mt-2"><i><b>Example -:</b></i></h6>
                    <p>int arr[3][3];</p>
                    <h6 className="mt-2"><i><b>Array Intialization -:</b></i></h6>
                    <p><b>1. </b>int arr[3][3] = 
                        {"{"}
                            <br/>
                            <p>{"{10,20,30},"}</p>
                            <p>{"{40,50,60},"}</p>
                            <p>{"{70,80,90}"}</p>
                        {"};"}
                    </p>
                </div>
                <div className="array-three">
                    <h5>3. Multi-Diamentional Array -:</h5>
                    <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
                    <p><i>{"<data-type> <array-name>[K][row][column];"}</i></p>
                    {/* <h6 className="mt-2"><i><b>Array Intialization -:</b></i></h6> */}
                </div>
                <div className="string-array mt-3">
                    <h6><i><b>String Array Concept -:</b></i></h6>
                    <p><b>1.</b> char name1[100] = "prashant kumar tejas";</p>
                    <p><b>2.</b> char name2[] = {"{'A', 'J', 'A', 'Y'}; // AJAY"}</p>
                    <p><b>3.</b> char date[12] = {"{'1', '/' '1', '/', '2', '0', '2', '5'}; //  1/1/2025"}</p>
                    <p><b>4.</b> char name3[3][100] = 
                        {"{"}
                                <br/>
                                <p>{"{'A', 'M', 'I', 'T'},"}</p>
                                <p>{"{'P', 'R', 'A', 'S', 'H', 'A', 'N', 'T'},"}</p>
                                <p>{"{'M', 'H', 'A', 'N', 'K', 'M', 'A', 'R'}"}</p>
                        {"};"}
                    </p>
                </div>
            </div>
        </div>
    )
}