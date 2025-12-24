import token_img from '../../img/token.png';

export default function Token(){
    return(
        <>
            <div className="toekn">
                <h5>Token -:</h5>
                <p>Token is a small unit of any program.</p>
                <h6><i><b>There are following type of the Token in C</b></i></h6>
                <ul className="type-of-token">
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Keywords</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Identifiers</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Operators</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Special Symbol</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> Constant</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> String</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> etc.</i></li>
                </ul>
                <h5>Types of Token In C -:</h5>
                <img src={token_img} alt="" />
            </div>
        </>
    )
}