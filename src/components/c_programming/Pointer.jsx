

export default function Pointer(){
    return(
        <>
            <div className="pointer">
                <div className="">
                    <h5>What is pointer in C?</h5>
                    <p>Pointer is a special variable, It store the variable address.</p>
                    <h6 className="mt-2"><i><b>Syntax -:</b></i></h6>
                    <p>{"<data-type> *<variable-name>;"}</p>
                    <h6 className="mt-2"><i><b>Pointer Declaration -:</b></i></h6>
                    <p>int *ptr;</p>
                    <h6><i><b>Pointer Initialization -:</b></i></h6>
                    <p>int no = 100;</p>
                    <p>int *ptr = &no;</p>
                </div>
            </div>
        </>
    )
}