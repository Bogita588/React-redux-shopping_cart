import React from 'react'
import { useSelector } from 'react-redux';

 const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
   // 
   const renderList =products.map((product) => {
    const { id, title, image,price, category} = product;




    //meal-item =our column wide

    return ( 
        <div className="image-container" key={id}>
      <div className="image-row">
        <div className="image-item">
          <img src={image} alt={title} className=""  height="300px" width="400px" />
          <div className="item-details">
            <div className="title">{title}</div>
            <div className="price">${price}</div>
            <div className="category">{category}</div>
          </div>
        </div>

        
        
      </div>
    </div>


);
   });
  return (
    <>{renderList}</>
  
    );
};
export default ProductComponent;