

export default function FooterBarSecond(){
    return(
        <section className="footer-second-header mt-5">
            <div className="container-fluid">
                  <div className="row footer-body footer-second-bar">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-col footer-our-service">
                            <h5>Our Services</h5>
                            <ol className="footer-fa-icon">
                                <li><i class="fa fa-superpowers" aria-hidden="true"></i> Static Website</li>
                                <li><i class="fa fa-superpowers" aria-hidden="true"></i> Dynamic Website</li>
                                <li><i class="fa fa-superpowers" aria-hidden="true"></i> Web Development</li>
                                <li><i class="fa fa-superpowers" aria-hidden="true"></i> Software Development</li>
                                <li><i class="fa fa-superpowers" aria-hidden="true"></i> App Development</li>
                                <li><i class="fa fa-superpowers" aria-hidden="true"></i> Game Development</li>
                                <li><i class="fa fa-superpowers" aria-hidden="true"></i> Hosting Services</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-col footer-our-project">
                            <h5>Our Project</h5>
                            <ol  className="footer-fa-icon">
                                <li><i class="fa fa-hospital-o" aria-hidden="true"></i> Hospital Web</li>
                                <li><i class="fa fa-graduation-cap" aria-hidden="true"></i> School Web</li>
                                <li><i class="fa fa-graduation-cap" aria-hidden="true"></i> College Web</li>
                                <li><i class="fa fa-shopping-basket" aria-hidden="true"></i> Shop Web</li>
                                <li><i class="fa fa-bus" aria-hidden="true"></i> Bus Web</li>
                                <li><i class="fa fa-plane" aria-hidden="true"></i> Aeroplane Web</li>
                                <li><i class="fa fa-train" aria-hidden="true"></i> Railway Web</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-col footer-about-me">
                            <h5>About Me</h5>
                            <ol className="footer-fa-icon">
                                <li><i class="fa fa-phone" aria-hidden="true"></i> 8853292074</li>
                                <li><i class="fa fa-envelope-o" aria-hidden="true"></i> ktejas8853@gmail.com</li>
                                <li><i class="fa fa-whatsapp" aria-hidden="true"></i> 8853292074</li>
                                <li><i class="fa fa-twitter" aria-hidden="true"></i> tejas@twiter</li>
                                <li><i class="fa fa-location-arrow" aria-hidden="true"></i> prayagraj 12/45 </li>
                                <li><i class="fa fa-university" aria-hidden="true"></i> NGBU@2024</li>
                                
                            </ol>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-col footer-send-message">
                            <h5>Your Message</h5>
                            <form action="">
                                <div className="form-div">
                                    <label for="basic-url" className="form-label">Name</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-div">
                                    <label for="basic-url" className="form-label">Email</label>
                                    <div className="input-group">
                                        <input type="email" className="form-control"/>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="input-group">
                                        <button className="message-btn">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}