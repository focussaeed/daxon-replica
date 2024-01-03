

const Card_Components= (props) => {
    return (

        // <div className="container mt-5">
        //     <div className="row align-items-center">

        //         <div className="col-lg-3 col-md-3 col-sm-3">
        //             <img src={props.image} alt="" width="280px" height="300px" />
        //             <h3>{props.Itemname} </h3>
        //             <p>{props.description}</p>
        //             <p>{props.price}</p>                
        //         </div>                
        //     </div>
        // </div>

        <div className="card">
                    <img src={props.image} alt="" width="300px" height="250px" style={{borderRadius:"8px", padding:"5px"}}  />
                    <h3>{props.Itemname} </h3>
                    <p>{props.description}</p>
                    <p>{props.price}</p>                
                            
           
        </div>      
    );
  };
  
  export {Card_Components};