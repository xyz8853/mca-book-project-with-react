import { Link } from "react-router-dom";


export default function PageNotFound(){
return(<>
  <section className="page-not-found-header">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-10 col-sm-12">
          <div className="page">
            <div className="">
              <div class="four_zero_four_bg"><h1 className="text-center ">404</h1></div>
                <div className="contant_box_404 text-center"><h3 class="h2">Look like you're lost</h3>
                  <p>the page you are looking for not avaible!</p>
                  <Link to={'/'} className="link_404">Go to Home</Link>
            	</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>)
}