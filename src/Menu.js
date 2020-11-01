import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import vegan from './images/v_1.png';
import glutenFree from './images/gf_1.png';
import vegetarian from './images/vg_1.png';
import chilli from './images/chilli_1.png';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 'auto',
    minHeight: '100%',
    margin: '10px',
    transition: 'all .3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '5px 8px  10px rgba(#252421, .2)',
    },
    height: '50em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCard: {
    justifyContent: 'center',
    width: '97%',
    height: '98%',
    boxShadow: 'none',
    borderColor: '#eececf',
    overflow: 'auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textAlign: 'center',
  },
  menuItem: {
    textAlign: 'center',
    fontSize: '24px'
  },
  menuContent: {
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
  },
  dialogRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  content: {

  },
  dialogPaper: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  icons: {
    height: '10%',
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: '60%',
    width: '60%',
    margin: '1px'
  },
  chilliImg: {
    height: '40%',
    width: '40%',
    margin: '1px'
  },
  empty: {
    height: '60%',
    width: '60%',
    margin: '1px',
    visibility: 'hidden'
  },
  hidden: {
    height: '60%',
    width: '60%',
    margin: '1px',
    display: 'none'
  },
  menuDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));


function MenuItem(classes, title, link, description, isVegan, isGlutenFree, isVegetarian, isChilli, isExtraChilli) {
  return (
    <div className={classes.menuDiv}>
      <Typography variant="h4" color='textSecondary' component="div" className={classes.menuItem}>
        <Link href={link} color="inherit">
          <Box fontWeight="fontWeightBold" m={1}>
            {title}
          </Box>

        </Link>
      </Typography>
      <Typography variant="body" color='textSecondary' component="div" className={classes.menuContent}>
        <Box fontWeight="fontWeightMedium" m={1}>
          {description}
        </Box>
      </Typography>
      <div className={classes.icons}>
        <img src={vegan} className={isVegan ? classes.img : classes.hidden}></img>
        <img src={glutenFree} className={isGlutenFree ? classes.img : classes.hidden}></img>
        <img src={vegetarian} className={isVegetarian ? classes.img : classes.hidden}></img>
        <img src={chilli} className={isChilli ? classes.chilliImg : classes.hidden}></img>
        <img src={chilli} className={isExtraChilli ? classes.chilliImg : classes.hidden}></img>
      </div>
      <div className={classes.icons}>
        <img src={vegan} className={classes.empty}></img>
        <img src={glutenFree} className={classes.empty}></img>
        <img src={vegetarian} className={classes.empty}></img>
        <img src={chilli} className={classes.empty}></img>
        <img src={chilli} className={classes.empty}></img>
      </div>
    </div>
  )
}

function CustomCard(classes, title, menu) {
  return (
    <Card className={classes.card}>
      <Card className={classes.innerCard} variant='outlined'>
        <CardContent className={classes.content}>
          <Typography variant="h4" color='textSecondary' component="div" className={classes.title}>
            <Box fontWeight="fontWeightBold" m={1}>
              {title}
            </Box>
          </Typography>
          {menu}
        </CardContent>
      </Card>
    </Card>
  )
}

function MealsMenu(classes) {
  return (
    <div>
      {
        MenuItem(
          classes,
          'HOUSE SPECIAL BUTTER CHICKEN',
          '/Butterchicken',
          "Creamy gluttonous chicken for people who loves sauce!",
          false, true, false, true, false
        )
      }
      {
        MenuItem(
          classes,
          'HOUSE SPECIAL CHICKEN 65',
          '/Chicken65',
          "When in doubt? Fried Chicken!",
          false, false, false, true, true
        )
      }
      {
        MenuItem(
          classes,
          'HOUSES SPECIAL KEEMA NAAN',
          '/Keemanaan',
          "Naan filled with lamb, beef or chicken.",
          false, false, false, true, true
        )
      }
    </div>
  )
}

function SnacksMenu(classes) {
  return (
    <div>
      {
        MenuItem(
          classes,
          'HOUSE SPECIAL DESI TACOS',
          '/Flatbreads',
          "Can't afford to go to Mexico? Heres' the next best thing!",
          false, false, false, true, false
        )
      }
      {
        MenuItem(
          classes,
          'HOUSE SPECIAL KERALA PUFFS',
          '/Kpuffs',
          "Pasties filled with spices, mince and a bit of a kick!",
          false, false, false, true, false
        )
      }
      {
        MenuItem(
          classes,
          'LADI PAV',
          '/Roll',
          "Buttery soft rolls, soft enough to sleep on!",
          false, false, true, false, false
        )
      }
    </div>
  )
}

function DessertsMenu(classes) {
  return (
    <div>
      {
        MenuItem(
          classes,
          'APPLE ROSES',
          '/Appleroses',
          "Apple rose tarts, it is art!",
          false, false, true, false, false
        )
      }
      {
        MenuItem(
          classes,
          'HOUSE SPECIAL TIRAMISU',
          '/Tiramisu',
          "Layers of creamy goodness, the italian way!",
          false, false, true, false, false
        )
      }
      {
        MenuItem(
          classes,
          'DALGONA COFFEE',
          '/Coffee',
          "Asian style Coffee.",
          true, true, true, true, true
        )
      }
      {
        MenuItem(
          classes,
          'HOUSE SPECIAL CHAI',
          '/Chai',
          "Chai, not chai tea.",
          false, true, true, false, false
        )
      }
    </div>
  )
}

export default function TimelineDialog(onClose, open) {
  const classes = useStyles();

  return (
    <Dialog onClose={onClose} open={open} maxWidth='lg' fullWidth={true} className={classes.dialogRoot} PaperProps={{ className: classes.dialogPaper }}>
      {CustomCard(classes, 'MEALS', MealsMenu(classes))}
      {CustomCard(classes, 'SNACKS', SnacksMenu(classes))}
      {CustomCard(classes, 'DESSERTS', DessertsMenu(classes))}
    </Dialog>

  );
}
