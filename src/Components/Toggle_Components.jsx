import React, {useState} from 'react'
import { Card_Components } from "../Components/Card-Components"
import image1 from '../assets/pro-hm1-1.webp'
import { Detail_Component } from './Detail_Component';

export const Toggle_Components = () => {

    const [Show_detail, setDetail] = useState(true);

    const show_data_handle = () => {
        setDetail(false);
      };

  return (


    <div className="bg-red-300 h-[100dvh] grid place-items-center ">

        {Show_detail ? (

            <div className="col-lg-3 col-md-3 col-sm-3">
                <button onClick={show_data_handle}>
                    <div className="card">
                        <Card_Components 
                        image={image1}
                        Itemname="Chair"
                        description="Golden Easy Spot Chair"
                        price="$250" />
                    </div>
                </button>
            </div>

            ) : (
                <Detail_Component />

            // <div className="container mt-5">
            //     <div className="row">
            //         <div className="col-lg-3 col-md-3 col-sm-3">
            //             <div className="card">
            //                <button onClick={show_data_handle}>
            //                 <Card_Components 
            //                 image={image1}
            //                 Itemname="Chair"
            //                 description="Golden Easy Spot Chair"
            //                 price="$250" />   
            //                 </button>            
            //             </div>
            //         </div>            
            //     </div>
            // </div> 
            )
        }
    </div>
  );
    };
