import { Logo_components } from "./Logo_Components";
import { Navitem_components } from "./Navitem_Components";
import { Shopping_Components } from "./Shoppingcart-Componenets";

const Navbar_Components = () => {
    return (
        
        <div className='navbar'>
            
            <div>
            <Logo_components />
            </div>
            <div>
            <Navitem_components />
            </div>
            <div>
            <Shopping_Components/>
            </div>
            

        </div>

        
      
    );
  };
  
  export {Navbar_Components};