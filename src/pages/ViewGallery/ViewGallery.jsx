import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ViewGallery.css'


const ViewGallery = ({doll}) => {
    const {name,image_url} = doll;
    useEffect(() => {
      AOS.init();
    }, [])
    return (
      <div data-aos="fade-right">
       
         <div className=' card-img-container card-img-top '>
         <div className="card mt-4 " style={{ width: '18rem' }}>
        <img src={doll.image_url} className=" cardImage card-img-top " alt={doll.name} />
       
          <h5 className="card-title">{doll.name}</h5>

       
        
          
        </div>
      
      
       </div>
      </div>
         );
};

export default ViewGallery;

