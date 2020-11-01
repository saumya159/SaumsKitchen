import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  
  }
}));

export default function Breakfast() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <h1>WIP for Breakfast page ...</h1>
    </div>
  );
}