import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridPhotos from './GridPhotos';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import {GridImage} from './GridImage';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1400,
    height: "100%",
  },
  img: {
    width: "100%",
    height: "500px",
    objectFit: 'cover'
  }
}));

const ImageGridList = props => {
  const classes = useStyles();
  const getGridListCols = () => {
    if (isWidthUp('xl', props.width)) {
      return 4;
    }

    if (isWidthUp('lg', props.width)) {
      return 3;
    }

    if (isWidthUp('md', props.width)) {
      return 3;
    }
    return 1;
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={500} className={classes.gridList} cols={getGridListCols()} spacing={20}>
        {GridPhotos.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols < getGridListCols() ? tile.cols : 1}>
            <Link to={tile.href}>
                {GridImage(tile.img, tile.title)}
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default withWidth()(ImageGridList);