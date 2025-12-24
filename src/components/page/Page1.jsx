import page1Img from "../../img/page1.jpg";
import page2Img from "../../img/new2.png";

export default function Page1(){
    return(
        <section className="page1-design">
            <div className="container-fluid">
                <div className="row">
                     <img className="page1-image" src={page2Img} alt="" />
                </div>
            </div>
        </section>
    )
}