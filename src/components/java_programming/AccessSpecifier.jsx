
import access_modifier from '../../img/access-modifier.jpg';
import access_modifier2 from '../../img/access-modifier2.png';

export default function AccessSpecifier(){
    return(
        <>
        <div className="access-specifier">
            <div className="access">
                <h5>What is the 'access-specifier' ?</h5>
                <p>An access specifier is a term used to describe the access level of a class member (field, method, constructor) in object-oriented programming languages. It specifies how the member can be accessed and from where within the program.</p>
                <h6><i><b>There are following type of access-specifier -:</b></i></h6>
                <ul>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> default</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> public</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> private</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> protected</i></li>
                </ul>
                <div className='access-img'>
                    <img className="img-fluid" src={access_modifier2} alt="" />
                    <img className='img-fluid' src={access_modifier} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}