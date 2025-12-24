

export default function DynamicMemoryAllocation(){
    return(
        <>
            <div className="dynamic-memory allocate">
                <div className="allocate-function">
                    <h5>What is Dynamic-Memory-Allocation in C?</h5>
                    <p>In C programming language some time we need to our requiredment allocate memory size program run time then we can use the Dynamic memory allocation.</p>
                    <h6 className="mt-2"><i><b>Type of Dynamic-Memory-Allocate function in C -:</b></i></h6>
                    <ul>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> malloc()</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> calloc()</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> relloc()</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> free()</i></li>
                    </ul>
                </div>
                <div className="malloc-function">
                    <h5>What is 'malloc' function in C?</h5>
                    <p>In C programming some time we need to our requiredment allocate memory size then we can use the malloc function. malloc function allocate garbage memory.</p>
                    <p><b>Note : </b>malloc function allocate memory program run time, If memory not allocate return null. If memory allocate then return the memory base address.</p>
                </div>
                <div className="calloc-function mt-2">
                    <h5>What is 'calloc' function in C?</h5>
                    <p>In calloc function pass the to parameter first size of memory and second pointer. calloc function allocate clean memory.</p>
                    <p><b>Note : </b>calloc function allocate memory program run time, If memory not allocate return null. If memory allocate then return the memory base address.</p>
                </div>
                <div className="relloc-function mt-2">
                    <h5>What is 'relloc' function in C?</h5>
                    <p>In programming some time we need program run time more memory then we can use the relloc function in c.relloc function pass the two parameter first is first memory base address and second size of new memory.</p>
                </div>
                <div className="free-function mt-2">
                    <h5>What is 'free' function in C?</h5>
                    <p>free function remove the memory size from the heap memory. free function pass the one parameter that is called pointer.</p>
                </div>
            </div>
        </>
    )
}