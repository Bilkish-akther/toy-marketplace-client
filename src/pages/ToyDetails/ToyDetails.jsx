import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../component/providers/AuthProvider';
import'./ToyDetails.css'

const ToyDetails = () => {
    const { toys } = useContext(AuthContext);
    const { id } = useParams();
    var toy=toys.find((toy)=>toy._id==id);
    return (
        <div data-aos="fade-right"  className='mt-4 mb-5' >
     <div  className='viewAllCardDet   ' >
     <img className='viewDetailsDesign mt-4'   src={toy.toyUrl} alt="" />
            <h4>{toy.toyName}</h4>
            <p>{toy.SellerName}</p>
            <p>{toy.sellerEmail}</p>
            <p>Quantity: {toy.quantity}</p>
            <p>Price: {toy.price}</p>
           <p>rating: {toy.rating}</p>
            <p>{toy.description}</p>
         

     </div>

        </div>
    );
};

export default ToyDetails;