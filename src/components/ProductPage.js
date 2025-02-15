import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/ProductPage.css';
import productsData from './products.json';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectValue, setSelectValue] = useState(1);

  useEffect(() => {
    const selectedProduct = productsData.find((item) => item.id == id);
    setProduct(selectedProduct);
  }, [id]);

  const handleSelectChange = (e) => {
    setSelectValue(parseInt(e.target.value, 10));
  };

  const handleAddToCart = () => {
    if (!product) {
      return;
    }
  
    // Get existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if the product is already in the cart
    const existingProductIndex = existingCartItems.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update the quantity
      existingCartItems[existingProductIndex].quantity += selectValue;
    } else {
      // If the product is not in the cart, add it with the selected quantity
      existingCartItems.push({ ...product, quantity: selectValue });
    }
  
    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(existingCartItems));
    alert('Product added to cart!');
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  const { title, type, price, rating, filename } = product;

  return (
    <>
      <Navbar />
      <div className='product-main-div'>
        <div className='product-main-div-1'>
          <div className='product-img-div'>
            <img src={'/img/' + filename} alt={title} />
          </div>
          <div className='product-detail-div'>
            <h1>{title}</h1>
            <h6>Category {type}</h6>
            <h6>Price ${price}</h6>
            <h6>Rating {rating}/5</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet fringilla lorem. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque quis ullamcorper nibh, eget
           
            </p>
            <select
              style={{
                color: 'black',
                width:"50px"
              }}
              value={selectValue}
              onChange={handleSelectChange}
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <button type="button" onClick={handleAddToCart}>
              Add to Basket
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
