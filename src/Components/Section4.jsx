import { Card_Components } from "../Components/Card-Components"
import image1 from '../assets/pro-hm1-1.webp'
import image2 from '../assets/pro-hm1-2.webp'
import image3 from '../assets/pro-hm1-3.webp'
import image4 from '../assets/pro-hm1-4.webp'


const Section4= () => {
    return (
        


        <div className="container mt-5">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="card">
                    <Card_Components 
                    image={image1}
                    Itemname="Chair"
                    description="Golden Easy Spot Chair"
                    price="$250" />               
                </div>

                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="card">
                        <Card_Components 
                        image={image2}
                        Itemname="Chair"
                        description="Golden Easy Spot Chair"
                        price="$250" />               
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="card">
                        <Card_Components 
                        image={image3}
                        Itemname="Chair"
                        description="Golden Easy Spot Chair"
                        price="$250" />               
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="card">
                        <Card_Components 
                        image={image4}
                        Itemname="Chair"
                        description="Golden Easy Spot Chair"
                        price="$250" />               
                    </div>
                </div>

            
        </div>

    </div>
        
    
      
    );
  };
  
  export {Section4};