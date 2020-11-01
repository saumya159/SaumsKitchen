import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactLogo from './images/react-logo.png';
import MaterialUILogo from './images/material-ui-logo.png';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '50%',
    padding: '1px'
  },
  media: {
    height: '100%',
    width: '3%'
  },
  logos: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }
});

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <div className={classes.logos}>
              <img
                  className={classes.media}
                  src={ReactLogo}
                  alt=''
              />
              <img
                  className={classes.media}
                  src={MaterialUILogo}
                  alt=''
              />
          </div>
          <Typography variant="body1" color="textSecondary" component="p">
                Built from scratch using React JS and Material UI.
          </Typography>
    </div>
  );
}
