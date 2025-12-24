import overloading from '../../img/method-overloading.jpg'
import overriding1 from '../../img/method-overriding2.png';
import static_method from '../../img/static-method.png';
import dispatcher from '../../img/dispatcher.png';
import inheritance from '../../img/inheritance.png';


export default function OOPsConcept(){
    return(
        <>
        <div className="oops-concept">
            <div className="intro">
                <h5>What is 'OOPs' concept in Java?</h5>
                <p>OOPs stand for 'Object Oriented Programming Language'. Java language hundred percentage follow the OOPs concept.</p>
                <h6><i><b>There are following type of the OOPs concept -:</b></i></h6>
                <ul>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> encapsulation</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> polymorphizm</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> inheritance</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> abstract</i></li>
                </ul>
                <div className="encapsulation">
                    <h5>1. What is Encapsulation -:</h5>
                    <p>Encapsulation means in side class all field declared the private and generate the getter and setter at a unit that is called 'encapsulation' .</p>
                </div>
                <div className="polymorphizm mt-2">
                    <h5>2. What is the polymorphism</h5>
                    <p>Polymorphism means many form at Ex -: One person is multiple role uncle, father, brother,teacher, etc that is called polymorphizm.</p>
                    <h6 className="mt-3"><i><b>There are following type of Polymorphism -:</b></i></h6>
                    <ul>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> method overloading</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> method overriding</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> static method</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> dynamic method dispatcher</i></li>
                    </ul>
                    <div className="method-overloading">
                        <h5>1. What is Method-Overloading ?</h5>
                        <p>Inside class same name method declared multiple time but parameter is different-2 that is called 'method-overloading' .</p>
                        <img className='img-fluid' src={overloading} alt="" />
                    </div>
                    <div className='method-overriding mt-3'>
                        <h5>2. What is Method-Overriding ?</h5>
                        <p>If any class extend any other class extending class also know as the 'parent' class and derived class also know as the 'child' class, Parent class method override in child class that is called 'method-overriding' .</p>
                        <p><b>Note : </b>'static' and 'final' method not override.</p>
                        <ul>
                            <li>1. Access specifier same or higher .</li>
                            <li>2. return data-type same .</li>
                            <li>3. function must be same .</li>
                            <li>4. parameter must be same</li>
                        </ul>
                        <div className='method-overriding'>
                            <img className='img-fluid' src={overriding1} alt="" />
                        </div>
                    </div>
                    <div className='static-method mt-4'>
                        <h5>3. What is 'static' method ?</h5>
                        <p>Static method also know as class method becasuse static method direct call without create class object. Static method inside body call the only static member. Static method not override.</p>
                        <div className='static-img mt-3'>
                            <img src={static_method} alt="" />
                        </div>
                    </div>
                    <div className='dynamic-method-dispatcher'>
                        <h5>4. What is the Dynamic-Method-Dispatcher in Java ?</h5>
                        <p>If any class extend any other class extending class create reference and child class create object, In this concept 'parent' class all method executed 'child' class only override method will executed .</p>
                        <div className='dynamic-method-img'>
                            <img className='img-fluid' src={dispatcher} alt="" />
                        </div>
                    </div>
                </div>
                <div className='inheritance'>
                    <h5>What is Inheritance in Java ?</h5>
                    <p>If any class extends any other class extending class also know as the 'parent' class and derived class also know as the 'child' class, Parent class code reuse in the child class that is class that is called inheritance.</p>
                    <i>Java support the only single inheritance by using the 'extends' keyword.</i>
                    <h6 className='mt-2'><b><i>Note -:</i></b></h6>
                    <ul>
                        <li><b>1. </b><i>class extend only 'single' class</i></li>
                        <li><b>2. </b><i>class implement 'multiple' interface</i></li>
                        <li><b>3. </b><i>interface extend 'multiple' interface</i></li>
                    </ul>
                    <div className='inheritance-img'>
                        <img src={inheritance} alt="" />
                    </div>
                </div>
                <div className='abstract mt-4'>
                    <h5>What is the abstract in Java ?</h5>
                    <p>The abstract keyword is a non-access modifier, used for classes and methods: Abstract class: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).</p>
                    <h6 className='mt-3'><i><b>There are two type use abstract in Java -:</b></i></h6>
                    <ul>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> abstract with class</i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i><i> abstract with method</i></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}