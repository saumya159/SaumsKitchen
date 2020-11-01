import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  
  }
}));

export default function Drink() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <h1>WIP for Drink page ...</h1>
    </div>
  );
}