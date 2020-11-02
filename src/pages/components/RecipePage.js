import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import { RecipeGrid } from './RecipeGrid';
import { fade } from '@material-ui/core/styles/colorManipulator';

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    fontSize: '2em',
    [theme.breakpoints.up('md')]: {
      fontSize: '2em',
    }
  },
  listItem: {
    "&:hover": {
      backgroundColor: fade(theme.palette.secondary.main, 0.2)
    }
  },
  listItemText: {
    fontSize: '2em',
  },
  hero: {
    height: "800px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "transparent",
    fontSize: "4rem",
  },
  root: {
    display: 'flex',
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
  appBar: {
    padding: '30px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "transparent",
    boxShadow: 'none',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: '2em',
    [theme.breakpoints.up('md')]: {
      fontSize: '4em',
    }
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "transparent",
  },
  drawerPaper: {
    padding: '30px',
    width: drawerWidth,
    backgroundColor: "transparent",
    border: "0px",
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: "transparent"
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    backgroundColor: "transparent"
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    backgroundColor: "transparent"
  },
}));

export const RecipePage = (backgroundImage, imageOne, imageTwo, recipe) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            color="secondary"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.icons}>
            <IconButton href="https://www.instagram.com/thatsagoodchoice/"><InstagramIcon button color="secondary" className={classes.icon} /></IconButton>
            <IconButton href="https://www.linkedin.com/in/saumya-johnson/"><LinkedInIcon color="secondary" className={classes.icon} /></IconButton>
            <IconButton href="https://github.com/saumya159"><GitHubIcon color="secondary" className={classes.icon} /></IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} color="primary">
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ fontSize: "2em" }} /> : <ChevronRightIcon style={{ fontSize: "2em" }} />}
          </IconButton>
        </div>
        <ListItem button key={'Home'} component="a" backgroundColor='transparent' classes={{ fontSize: 80 }} href={process.env.PUBLIC_URL + '/'} >
          <ListItemText primary={'Home'} classes={{ primary: classes.listItemText }} />
        </ListItem>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Box className={classes.hero} style={{ backgroundImage: `url(${backgroundImage})` }}  >
        </Box>
        {RecipeGrid(imageOne, imageTwo, recipe)}
      </main>
    </div>
  );
}