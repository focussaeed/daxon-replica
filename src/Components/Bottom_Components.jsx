import { Logo_components } from "./Logo_Components";

const Bottom_Components= () => {
    return (
        <div className="container bottom1 mt-5">

                <div className="row ">
                    
                    <div className="col-lg-3 col-md-3 col-sm-3 bottom2">
                        <div> 
                        <Logo_components />
                        </div>
                        <div>
                        <i class="fa-brands fa-whatsapp fa-lg  p-4"></i>
                        <i class="fa-brands fa-square-facebook fa-lg  p-4"></i>
                        <i class="fa-brands fa-square-twitter fa-lg  p-4"></i>
                        </div>
                        
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 bottom3">
                       <h5>USEFUL LINK</h5>
                        <ul>
                            <li><a href="#">Shopping Cart</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Checkout</a></li>
                            <li><a href="#">Suport</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 bottom3">
                       <h5>ABOUT</h5>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Term of use</a></li>
                            <li><a href="#">Help Centre</a></li>
                        </ul>
                    </div>
               </div>
        </div>
      
    );
  };
  
  export {Bottom_Components};