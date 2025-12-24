import qualifier_type from '../../img/qualifier.png';


export default function Qualifier(){
    return(
        <>
            <div className="qualifier mt-5">
                <h5>What is Qualifier In C?</h5>
                <p>Qualifier is a special data-type in C language.It is provide the specia features in c language.</p>
                <i><b>There are following type of qualifier</b></i>
                <ul className="type-qualifier">
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> signed</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> unsigned</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> long</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> sort</i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><i> etc.</i></li>
                </ul>
                <div className='qualifier-example'>
                    <h6><strong>Syntax -:</strong></h6>
                    <p><em>{"<qaulifier> <variable-name>;"}</em></p>
                    <h6>Qualifier Declaration Example -:</h6>
                    <ul>
                        <li>short age;</li>
                        <li>long price;</li>
                        <li>signed value;</li>
                        <li>unsigned number;</li>
                    </ul>
                    <h6>Qualifier variable initialization -:</h6>
                    <ul>
                        <li>short age = 22;</li>
                        <li>long price = 12500;</li>
                        <li>signed value = 10000;</li>
                        <li>unsigned number =500;</li>
                    </ul>
                </div>
                <div className='qualifier-img'>
                    <img className='img-fluid' src={qualifier_type} alt="" />
                </div>
                
            </div>
        </>
    )
}