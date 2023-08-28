import React from 'react'
import { useSelector } from 'react-redux';

 const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
   // 
   const renderList =products.map((product) => {
    const { id, title, image,price, category} = product;




    //meal-item =our column wide

    return(

      
        <div className='gallery 'key={id}>
          
              <img src={image} alt={title} />
           
            {/*<div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div> */}
         
        

        </div>

      
    );
   });

   return <>{renderList}</>

  };
  export default ProductComponent;