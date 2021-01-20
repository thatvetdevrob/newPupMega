import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import App from '../App';
import Acc from './acc';
import Clothes from './clothes';
import Weapons from './weapons';
import Items from './items';
import Cart from './cart';
import CartCounter from './cart-counter';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className="love"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box data-testid="line-4" p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab 
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div data-testid="line-5" className="wrapper3 topper">
    <div data-testid="line-6" className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab className='bar' label="Home" href="/home" {...a11yProps(0)} />
          <LinkTab className='bar' label="Accessories" href="/acc" {...a11yProps(1)} />
          <LinkTab className='bar' label="Armor" href="/armor" {...a11yProps(2)} />
          <LinkTab className='bar' label="Weapons" href="/weapons" {...a11yProps(3)} />
          <LinkTab className='bar' label="Items" href="/items" {...a11yProps(4)} />
          <LinkTab className='bar' label={<CartCounter/>} href="/cart" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel  value={value} index={0}>
      <App />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Acc />
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Clothes />
      </TabPanel>
      <TabPanel  value={value} index={3}>
       <Weapons />
      </TabPanel>
      <TabPanel  value={value} index={4}>
       <Items />
      </TabPanel>
      <TabPanel  value={value} index={5}>
       <Cart />
      </TabPanel>
    </div>
 </div>
  
  );
}
