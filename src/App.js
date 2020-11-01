import React, { createRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import Background from './images/featureimage.png';
import ImageGridList from './Grid';
import AboutMe from './AboutMe';
import Footer from './Footer';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Link from '@material-ui/core/Link';
import TimelineDialog from './Menu';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  icons: {
    display: 'flex',
    padding: '10px',
    justifyContent: 'space-between',
  },
  titles: {
    display: 'flex',
    paddingTop: '40px',
    justifyContent: 'center',
  },
  titleItem: {
    padding: '0 30px 0 20px',
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
    height: "500px",
    backgroundPosition: "centre",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "transparent",
    fontSize: "4rem",
  },
  root: {
    display: 'flex',
    flexDirection: "column",
    backgroundColor: '#ffffff',
    flexGrow: 1,
  }
}));


function App() {
  const classes = useStyles();
  const scrollDiv = createRef();
  const scrollSmoothHandler = () => {
    scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box className={classes.hero} >
        <img src={Background} alt="background" style={{ height: "50%" }} />
        <List className={classes.titles}>
          <Link onClick={handleClickOpen} component="button" color="primary" variant="h6" style={{ padding: '0 30px 0 0', outline: 0 }}>
            Recipes
          </Link>
          {TimelineDialog(handleClose, open)}
          <Link onClick={scrollSmoothHandler} component="button" color="primary" variant="h6">
            About Me
                    </Link>
          <Link href="mailto:saumjohn97@gmail.com" component="a" color="primary" variant="h6" style={{ padding: '0 0px 0 30px' }}>
            Email
                    </Link>
        </List>
        <div className={classes.icons}>
          <IconButton href="https://www.instagram.com/thatsagoodchoice/"><InstagramIcon button color="primary" fontSize="medium" /></IconButton>
          <IconButton href="https://www.linkedin.com/in/saumya-johnson/"><LinkedInIcon color="primary" fontSize="medium" /></IconButton>
          <IconButton href="https://github.com/saumya159"><GitHubIcon color="primary" fontSize="medium" /></IconButton>
        </div>
      </Box>
      <ImageGridList></ImageGridList>
      <div ref={scrollDiv}>
        <AboutMe></AboutMe>
      </div>
      <Footer></Footer>
    </div>
  );
}




export default App;
