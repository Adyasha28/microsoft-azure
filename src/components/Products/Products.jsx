import React from 'react';
import {Grid} from '@mui/material';
import Product from './Product/Product';

const Products = ({ products, onAddToCart }) => {

  if (!products.length) return <p>Loading...</p>;

  return (
    <main>
      <Grid container justify="center" spacing={4} sx={{padding:3}}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
