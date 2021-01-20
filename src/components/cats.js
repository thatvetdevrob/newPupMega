/** Categories
 * @component Categories
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Paper, List, ListItem, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { changeCategory, fetchCategories } from '../store/category_reducer';
import Products from './inventory';

const useStyles = makeStyles((theme) => ({
    
  title: {
    display: 'flex',
    paddingLeft: '24px'
  },

  list: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10px'

  },

  listItem: {
    display: 'inline',
    // flexDirection: 'row'
  },

  mainCategory: {
    display: 'flex',
  }
}));

const Categories = props => {
  
  useEffect(() => {
    props.fetchCategories();
    props.changeCategory({name: props.category})
  },[]);
  
  let categoriesArr = props.categories.categories;
  console.log(categoriesArr, 'category array');


  const classes = useStyles();

  return (
    <Paper id='panelA' elevation={0} elementType="div">
      
  <Typography className={classes.title} variant="h4"><span className='page_font'>Browse Our {props.categories.activeCategory.name}</span></Typography>
        <div className={classes.list}>

          <List>
            {categoriesArr.map((category, idx) => {
              return (
              <ListItem  key={idx} onClick={() => props.changeCategory({name: category})}><Button  style={{maxWidth: '9em', width: '9em', marginBottom: '5px'}} variant="contained" color="secondary">
              {category}
            </Button> </ListItem>
              )
            })}
            
          </List>

          <Products />

        </div>
        <div className={classes.mainCategory}>
       
       <Typography variant="h4"><span className='page_font'>Now Browsing: {props.categories.activeCategory.name}</span></Typography>
       
     </div>
      </Paper>
      
   
  )
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = { changeCategory, fetchCategories };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);