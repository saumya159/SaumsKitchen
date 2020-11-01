import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'no-wrap',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
  },
    justifyContent: 'space-between'
  },
  gridList: {
    display: 'flex',
    width: "100%",
    height: "100%",
    flexDirection: 'column'
  },
  image: {
    width: "100%",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
}));

function Grid(imageOne, imageTwo, recipe) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {recipe}
        <div className={classes.gridList}>
            <div className={classes.image}  style={{ backgroundImage: `url(${imageOne})` }}></div>
            <div className={classes.image}  style={{ backgroundImage: `url(${imageTwo})` }}></div>
        </div>
    </div>
  );
}

export const RecipeGrid = (imageOne, imageTwo, recipe)=>{
    return Grid(imageOne, imageTwo, recipe);
}
