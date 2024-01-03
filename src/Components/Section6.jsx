import { Card_Components } from "../Components/Card-Components"
import image5 from '../assets/pro-hm1-5.webp'
import image6 from '../assets/pro-hm1-6.webp'
import image7 from '../assets/pro-hm1-7.webp'
import image8 from '../assets/pro-hm1-8.webp'


const Section6= () => {
    return (
        


        <div className="container mt-5">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="card">
                    <Card_Components 
                    image={image5}
                    Itemname="Chair"
                    description="Golden Easy Spot Chair"
                    price="$250" />               
                </div>

                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="card">
                        <Card_Components 
                        image={image6}
                        Itemname="Chair"
                        description="Golden Easy Spot Chair"
                        price="$250" />               
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="card">
                        <Card_Components 
                        image={image7}
                        Itemname="Chair"
                        description="Golden Easy Spot Chair"
                        price="$250" />               
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="card">
                        <Card_Components 
                        image={image8}
                        Itemname="Chair"
                        description="Golden Easy Spot Chair"
                        price="$250" />               
                    </div>
                </div>

            
        </div>

    </div>
        
    
      
    );
  };
  
  export {Section6};