import thread_way from '../../img/thread-way.png';



export default function MultiThreading(){
    return(
        <>
            <div className="multi-threading">
                <div className="multi-def">
                    <h5>What is the multithreading in Java?</h5>
                    <p>Multithreading in Java is an act of executing a complex process using virtual processing entities independent of each other. These entities are called threads. Threads in Java are virtual and share the same memory location of the process. As the threads are virtual, they exhibit a safer way of executing a process.</p>
                </div>
                <div className="create-multi-thread mt-3">
                    <div className="type">
                        <h5>How many ways can we create multithreading ?</h5>
                        <ul>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> extends 'Thread' class</i></li>
                            <li><i class="fa fa-star-o" aria-hidden="true"></i><i> implements 'Runnable' interface</i></li>
                        </ul>
                        <div className='thread-way-img'>
                            <img src={thread_way} alt="" />
                        </div>
                    </div>
                    <div className="thread-class mt-2">
                        <h5>Extends 'Thread' class ?</h5>
                        <p>A thread is a program that starts with a method() frequently used in this class only known as the start() method. This method looks out for the run() method which is also a method of this class and begins executing the body of the run() method. Here, keep an eye over the sleep() method which will be discussed later below.</p>
                    </div>
                    <div className='runnable-interface mt-2'>
                        <h5>Implements 'Runnable' interface ?</h5>
                        <p>java.lang.Runnable is an interface that is to be implemented by a class whose instances are intended to be executed by a thread. There are two ways to start a new Thread – Subclass Thread and implement Runnable. There is no need of subclassing a Thread when a task can be done by overriding only run() method of Runnable. </p>
                    </div>
                </div>
                <div className="note mt-4">
                    <i><b>Note : </b>Every class that is used as thread must implement Runnable interface and over ride it’s run method.</i>
                </div>
            </div>
        </>
    )
}