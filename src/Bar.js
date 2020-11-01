import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';

import MenuIcon from '@material-ui/icons/Menu';


import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  appRoot: {
    flexGrow: 1,
  },
  appTitle: {
    flexGrow: 1,
  },
  alignItems: 'center',
  backgroundColor: '#c13164',
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));
  

export default function Bar() {
  const classes = useStyles();
  let history = useHistory()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleMenuItemClick = (item) => (e) =>{
    console.log('menu item is clicked ', item)
    history.push('./'+item)
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['drink', 'breakfast', 'desserts', 'snacks','lunch','bread'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon> <InboxIcon /> </ListItemIcon>
            <ListItemText onClick={handleMenuItemClick(text)} primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            Saums Kitchen 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}
