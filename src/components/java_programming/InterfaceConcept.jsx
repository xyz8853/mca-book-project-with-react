


export default function InterfaceConcept(){
    return(
        <>
        <div className="interface-head">
            <div className="def">
                <h5>What is interface in Java ?</h5>
                <p>Inside java interface very similar to class. Inside inderface all method by default public abstract(incompleted) declared. Java 1.8 version static method define inside interface.</p>
                <h6><i><b>There are following type of interface -:</b></i></h6>
                <ul>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> marker interface</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> functional interface</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> normal interface</i></li>
                </ul>
                <div className="marker-interface mt-2">
                    <h5>What is 'marker' interface ?</h5>
                    <p>Inside marker interface no any member include that is called marker interface. Every marker interface give a special fecility.</p>
                    <h6><i><b>example -:</b></i></h6>
                    <ul>
                        <li><i>Serializable</i></li>
                        <li><i>Cloneable</i></li>
                        <li><i>RandomeAccess</i></li>
                        <li><i>etc.</i></li>
                    </ul>
                </div>
                <div className="functional-interface">
                    <h5>What is 'functional' interface ?</h5>
                    <p>Inside interface only one <strong>single abstract method(SAM)</strong> or <strong>functional method</strong> that is called marker interface. Any number of static and default method inside functional interface no problem.
                       they provide target types for <strong>lambda expressions</strong> and <strong>method references</strong>.
                    </p>
                    <h5 className="mt-3">Why Functional Interface in Java? Advantages of Functional Interface in Java?</h5>
                    <p>We provide implementation of Functional Interfaces using Lambda expressions & Lambda expressions can only be used in context of Functional interfaces. You can assign a lambda expression to a single abstract method (i.e. To a Functional interface). If you could assign a lambda expression to an interface containing more than one abstract method (i.e. a non functional interface), the lambda expression could only have implemented one of its methods, leaving the other methods unimplemented. That’s why Lambda expressions don’t have method name, return types etc. as it talks about a single abstract method.
                       Therefore, there is no point of having more than one abstract method in a Java Functional Interface as they are meant for Lambda expressions & Lambda expression could be assigned to a single abstract method.</p>
                    <h6><i><b>example -:</b></i></h6>
                    <ul>
                        <li><i>Comparable</i></li>
                        <li><i>EventListener</i></li>
                        <li><i>Runnable</i></li>
                        <li><i>Function</i></li>
                        <li><i>Consumer</i></li>
                        <li><i>Predicate</i></li>
                        <li><i>Supplier</i></li>
                        <li><i>etc.</i></li>
                    </ul>
                </div>
                <div className="default interface">
                    <h5>What is normal interface ?</h5>
                    <p>Inside interface multiple member of 'public abstract', 'state' and default method also that is called normal interface.</p>
                </div>
            </div>
        </div>
        </>
    )
}