import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 49.99 },
  { id: 3, name: 'Product 3', price: 19.99 },
];

const Catalogue = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="page catalogue">
      <h1>Product Catalogue</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}{' '}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogue;
