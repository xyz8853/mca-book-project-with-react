import escapse_sequence from '../../img/escapse-sequence.WEBP' 


export default function EscapeSequence(){
    return(
        <>
            <div className="escanpe-sequence">
                 <h5>What is EscapeSequence in C Language?</h5>
                 <p>Escanpe-Sequence is a special character in c language.
                 Programming languages like C have escape sequences as a standard feature. They enable the inclusion of special characters and control patterns in strings and character constants that are difficult to represent or write directly. 
                 </p>
                 <ul>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><strong><i> '\n'</i></strong></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><strong><i> '\t'</i></strong></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><strong><i> '\r'</i></strong></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><strong><i> '\a'</i></strong></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><strong><i> '\b'</i></strong></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i><strong><i> etc.</i></strong></li>
                 </ul>
                 <img src={escapse_sequence} alt="" />
            </div>
        </>
    )
}