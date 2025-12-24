import contactus from '../../img/contactus.jpg';
import { FooterBarFirst } from '../footer_bar/FooterBarFirst';
import FooterBarSecond from '../footer_bar/FooterBarSecond';
import Navbar from '../navbar/Navbar';



export default function AboutMe(){
    return(
    <>
        <Navbar></Navbar>
        <section className="about-me-section about-head">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 text-center about-div">
                        <div className="about-me-img about-all-img">
                            <img className='img-fluid' src={contactus} alt="" />
                        </div>
                    </div>
                    {/* <div className='col-12 text-center people-saying-div mt-4'>
                        <div className='people-saying-img about-all-img'>  
                            <img className='img-fluid' src={people_saying} alt="" />
                        </div>
                    </div>
                    <div className='col-12 text-center language-level-div mt-4'>
                        <div className='language-level-img about-all-img'>  
                            <img className='img-fluid' src={language_level} alt="" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        <FooterBarSecond></FooterBarSecond>
        <FooterBarFirst></FooterBarFirst>
    </>
        
    )
}