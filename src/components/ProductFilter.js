import React, { useState } from 'react';
import './ProductFilter.css'
const ProductFilter = ({ categories, onFilterChange, onSearchChange }) => {
  const [tit,setTit] = useState('All Products');

  const handleC = ()=>{
    setTit('Filtered Products');
    
  }
  const handleCl= ()=>{
    setTit('All Products');
    
  }
  return (
    <div>
      <center>

        <div className='search'>
          <div className='type'>
            <button onClick={() => {onFilterChange('all'); handleCl();}}>All</button>
            {categories.map((category) => (
              <button key={category} onClick={() => {onFilterChange(category) ; handleC(); }} >
                {category}
              </button>
            ))}
          
          </div>
          <div style={{marginLeft:'100px'}}>
          <label>
            Give a Hint
            <input type="text" style={{ marginLeft:'20px',marginRight:'20px',width:'200px' ,fontFamily:'sans-serif' ,border : '1px solid white' , borderRadius:'10px' , boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',marginTop :'40px',paddingLeft:'5px'}} onChange={(e) => onSearchChange(e.target.value)} />
          </label>
          </div>
        </div>
        <div>
          <br />
          <br />
        <h1 className='head'>{tit}</h1>

        </div>
      </center>
      
    </div>
  );
};

export default ProductFilter;
