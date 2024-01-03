import Pict1 from '../assets/hm1-single-1.webp'
import { Button } from '../Components/Button-Components';

const Section2= () => {
    return (
        
        <div className="container mt-5">
            <div className="row align-items-center sec2A">

            <div className="col-lg-6 col-md-6 col-sm-6 sec2B">
                <img   src={Pict1} width="500px" height="500px" alt="Picture.jpg" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">

                <p className='secB5'>30% off</p>
                <h1 className='secB6'>Comfort Chair </h1>
                <p className='secB6'>Collect from Daxaon & get 30% Discount</p>

                <Button label="Shop Now" />
            </div>

            </div>
        </div>
    
      
    );
  };
  
  export {Section2};