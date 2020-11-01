import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Feature from './images/saum.png';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    height: '50%',
    padding: '50px 0px 0px 0px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
  },
  },
  media: {
    marginRight:20,
    alignItems:'center',
    width: '25%'
  },
  text: {
    width: '50%'
  }
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <img
          className={classes.media}
          src={Feature}
          alt=''
        />
        <div className={classes.text}>
          <Typography variant="h3" color="textSecondary" component="p">
               Saumya Johnson
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
                You may know me from <Link href="https://www.instagram.com/thatsagoodchoice/">@thatsagoodchoice</Link>, where I show exciting dishes to learn different skills and recipes, providing joy for my family and friends. Thanks to my friend Samantha, I started <Link href="https://www.instagram.com/thatsagoodchoice/">@thatsagoodchoice</Link> and now a website to showcase my dishes, letting others create them in their own kitchens!
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
                I also love to code. I built the website using <Link href="https://reactjs.org/">React JS</Link> and <Link href="https://material-ui.com/">Material UI</Link> in collaboration with <Link href="http://linkedin.com/in/seannaren">@sean</Link>, <Link href="https://www.linkedin.com/in/maheratashfaraz/">@maher</Link>, <Link href="https://www.instagram.com/phoebynaren">@phoeby</Link> for illustration and <Link href="https://www.instagram.com/bnikita97">@nikita</Link> for photo editing. The code can be seen on GitHub <Link href="https://github.com/saumya159">here</Link>.
          </Typography>
        </div>
    </div>
  );
}
