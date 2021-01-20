/** 
 * Products
 * @component products
 */

import React, { useEffect } from 'react';

// connect let's us opt-in to the store
import { connect } from 'react-redux';
import { Avatar, Paper, List, ListItem, Button, Card, Typography } from '@material-ui/core';
import { addItem } from '../store/cart_reducer';

// we need some actions that can be run against our reducer
import { filter, lowerInventory, fetchProducts } from '../store/inventory_reducer';


const Products = props => {
  let { categories, products } = props;

  useEffect(() => {
    props.fetchProducts();
  }, []);

  const If = (props) => {
    return props.condition ? props.children : null;
  }
  

console.log("Here in props ", products); 

function addToCart(product) {
  props.addItem(product);
}

  return (
    
       <List className='flexor'>

{products.map((product, idx) => {
    console.log('The loop', product.name);
    console.log("looking for active", props.categories.activeCategory.name)

  return (
    
    <If condition={product.category === props.categories.activeCategory.name}>

      <Card className="display-stuff relativer"  variant="outlined">

        <ListItem key={idx + '1'}><img className="sizor-item" alt={product.name} src={product.url} /></ListItem>

        <ListItem key={idx + '2'}>{product.name}</ListItem>

        <ListItem key={idx + '3'}>Price: ${product.price}.00</ListItem>

        <ListItem className='bottomer' key={idx + '4'}>Description: {product.description}</ListItem>

        <Button style={{minWidth: '90%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '5px'}} id="" className='button-absoluter' variant="contained" color="secondary" onClick={() => addToCart(product)}> Add To Cart </Button>

      </Card>

</If>

  )
})}
</List>
  
  )
}

// tell our connect function add to component props whatever we need from the redux store / state 
// what does MY component need?
const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories,
    cart: state.cart
  }
}

const mapDispatchToProps = {  filter, lowerInventory, fetchProducts, addItem };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);