import predefineFunction from '../../img/function-predefined.png';
import formattedAndUnformatted from '../../img/Formatted-and-unformatted-functions.png';
export default function PredefineFunction(){
    return(
        <>
            <h5>What is PredefineFunction?</h5>
            <p>Also referred to as predefined functions, library functions are already defined in the C libraries. This means that we do not have to write a definition or the function's body to call them.</p>
            <h6>Some predefine function -:</h6>
            <ul>
                <li><i class="fa fa-star-o" aria-hidden="true"></i><i> main</i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i><i> clrscr</i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i><i> printf</i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i><i> scanf</i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i><i> getch</i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i><i> gets</i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i><i> puts</i></li>
                <li><i class="fa fa-star-o" aria-hidden="true"></i><i> etc.</i></li>
            </ul>
            <div className="predefine-function mt-5">
                <img className='img-fluid' src={predefineFunction} alt="" />
            </div>
            <div className="type-of-function mt-5">
                <h5><i>Formatted function and Unformatted function -:</i></h5>
                <img className='img-fluid' src={formattedAndUnformatted} alt="" />
            </div>
        </>
    )
}