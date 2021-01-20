import React from 'react';

import { connect } from 'react-redux';
import { Paper, List, ListItem, Button, Typography, Card } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteItem } from '../store/cart_reducer';
import { makeStyles } from '@material-ui/core/styles';
import { incrementInventory } from '../store/inventory_reducer';
import SimpleModal from './simple'




///////////////////
const SimpleCart = props => {
    let { cart } = props;

    function removeFromCart(item) {
        props.deleteItem(item);
        props.incrementInventory(item);
    }



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

    const classes = useStyles();

    const If = (props) => {
        return props.condition ? props.children : null;
    }


    console.log("Hello from cart: ", cart.length);

    let total = 0;


    return (



        <Paper elevation={0} className="strecher" elementType="div">
            <Paper id='panelA' elementType="section">
                <Typography className={classes.title} variant="h4"><span className='page_font'>Your shopping cart:</span></Typography>
                <div className={classes.list} id="strecher">

                    <If condition={cart.length >= 1}>

                        <div id='auto' className="flex">
                            <div class="wrapper5">
                                <div class="container5">
                                    <form action="/">
                                        <h1>
                                            <i class="fas fa-shipping-fast"></i>
                Checkout Details
            </h1>
                                        <div class="name">
                                            <div>
                                                <label for="f-name">First</label>
                                                <input required type="text" name="f-name" />
                                            </div>
                                            <div>
                                                <label for="l-name">Last</label>
                                                <input required type="text" name="l-name" />
                                            </div>
                                        </div>
                                        <div class="street">
                                            <label for="name">Street</label>
                                            <input required type="text" name="address" />
                                            <input type="text" hidden name="sold" value="true" />
                                        </div>
                                        <div class="address-info">
                                            <div>
                                                <label for="city">City</label>
                                                <input required type="text" name="city" />
                                            </div>
                                            <div>
                                                <label for="state">State</label>
                                                <input required type="text" name="state" />
                                            </div>
                                            <div>
                                                <label for="zip">Zip</label>
                                                <input required type="text" name="zip" />
                                            </div>
                                        </div>
                                        <h1>
                                            <i class="far fa-credit-card"></i> Payment Information
            </h1>
                                        <div class="cc-num">
                                            <label for="card-num">Credit Card No.</label>
                                            <input required type="text" name="card-num" />
                                        </div>
                                        <div class="cc-info">
                                            <div>
                                                <label for="card-num">Exp</label>
                                                <input required type="text" name="expire" />
                                            </div>
                                            <div>
                                                <label for="card-num">CCV</label>
                                                <input required type="text" name="security" />
                                            </div>
                                        </div>
                                        <div class="btns">
                                            <input className='buttonX' type="submit" value='pay' />


                                        </div>
                                    </form>
                                </div>
                            </div><div id="items">
                                <Paper>
                                <h5 className='total_font'>Your items:</h5>
                                    <List className="flexer" >
                                        {cart.map((item, idx) => {
                                            console.log(total);
                                            console.log("price item: ", item.price)
                                            total += item.price;
                                            console.log("now total is:", total);
                                            return (
                                
                                        
                                    <ListItem key={idx + '1'}>
                                        <Card className="display-stuff relativer"  >
                                        <div className='checkout-panels'>
                                        <div><img className="sizor-checkout" alt={item.name} src={item.url} /></div>

                                        <div key={idx + '2'}>{item.name}</div>

                                <div key={idx + '3'}>Price: ${item.price}.00</div>

                                        </div>
                                        
                                        <div>
                                        <div><Button style={{minWidth: '90%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '5px'}} variant="contained" onClick={() => removeFromCart(item)} color="secondary" startIcon={<DeleteIcon />}
                                        >
                                                                Remove</Button></div></div>
                                            </Card>
                                            </ListItem>


                                            )
                                        })}
                                    </List>
                                    <div><h3>Total: ${total}.00</h3></div>
                                </Paper>
                            </div>
                        </div>

                    </If>

                    <If condition={cart.length < 1}>
                        <List className="flexer" >
                            <h1 className='total_font'>Nothing here!</h1>
                            <h5 className='total_font'>total: ${total}.00</h5>
                        </List>
                    </If>

                </div>
            </Paper>
        </Paper>
    )
}


const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = { deleteItem, incrementInventory };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SimpleCart);