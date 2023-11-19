import React from 'react';
import './ProductSearch.css'
const ProductSearch = ({ products, filters, searchTerm }) => {
  const filteredProducts = products
    .filter((product) => filters.length === 0 || filters.includes(product.type) || filters.includes('all'))
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div style={{ padding: '50px' }}>
      <center>
        <ul className='Products'>
          {filteredProducts.map((product) => (
            <li key={product.title}>
                <img src={'./img/' + product.filename} height='300px' width='200px' alt='nil'></img><br />
                <p>
                  <b>product : </b>{product.title} <br />  <b>price :</b> {product.price} $ <br />
                  <b>rating :</b> {product.rating}/5
                </p>
                <button className='but'>Buy</button>
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default ProductSearch;
