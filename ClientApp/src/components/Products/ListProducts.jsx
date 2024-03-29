import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListProducts({product}) {
  const { id, title, image, alt, price, description } = product

  // DELETE a product by id
  const deleteProducts = (id) => {
    axios.delete('/api/products/'+ id)
     .then(response => console.log(response.data.id));
    };
    // deleteProducts(id);

    return (
      // this component places the data into its respective postion based on its value
      <div className="box desktop">
        {/* can use database id as the unique react key */}
        <div className="left">
          <h2 className="prodTitle">{title}</h2>
          <img className="prodImg" src={image} alt={alt}/>
          <p className="price">${price}</p>
          <p className="description">{description}</p>
          <div className="change-product">
            <Link className="edit" to={"/edit-product/" + id}>Edit</Link>
            <div className="delete" onClick={() => {deleteProducts(id)}}>Delete</div>
          </div>
        </div>
      </div>
    );
  };

export default ListProducts;