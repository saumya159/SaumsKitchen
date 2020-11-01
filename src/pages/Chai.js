import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RecipePage } from './components/RecipePage'
import chai1 from '../images/chai1.jpg';
import chai2 from '../images/chai2.jpg';
import Background from '../images/chai3.jpg';
import { Ingredient } from './components/PopUp'


const useStyles = makeStyles((theme) => ({
  recipe: {
    padding: '20px',
    display: 'flex',
    width: "100%",
    height: "100%",
    flexDirection: 'column'
  },
  instructions: {
    paddingLeft: '1em',
    marginTop: '0px'
  }
}));


function Recipe() {
  const classes = useStyles();

  const recipe = (
    <div className={classes.recipe}>
      <Typography variant="h2" align='left'>
      House Special Chai
      </Typography>
      <Typography variant="body1" align='left'>
        Masala Chai:Its proper name is masala chai (originating in India), which means spice blend. 
        Chai is actually just a word for tea.Some people prefer to have cinnamon, fennel, and cumin in their masala.
        consisting of nutmeg, rose petals, and clove. 
        Regardless, almost every family enjoys a masala blend that includes cardamom, ginger, sugar, and milk.
      </Typography>
      <Typography variant="h3" align='left'>
        Ingredients (Serves 2/3)
      </Typography>
      {Ingredient('2 tbsp of Assam or Darjeeling tea leaves', 'An alternative would be 2 to 3 tea bags, depending on how much chai you wish to make.')}
      {Ingredient('500ml of water')}
      {Ingredient('100ml of milk', 'Vegan Alternative: Soya milk. For people who prefer a sweeter taste, use almond milk.')}
      {Ingredient('2 tsp of granulated sugar')}
      {Ingredient('3 cardomom pods')}
      {Ingredient('2 slices of ginger, crushed')}
      {Ingredient('2 cloves')}
      {Ingredient('5 peppercorns crushed')}
      {Ingredient('1 star anise')}
      {Ingredient('1/2 cinnamon stick')}
      <Typography variant="h3" align='left'>
        Recipe
      </Typography>
      <Typography variant="body1" align='left'>
        <ol className={classes.instructions}>
          <li>Put 2 tbsp Assam or Darjeeling tea, 2 slices of ginger,1 star anise, 1½ tsp black peppercorns, 3 cardamom pods, 1/2 cinnamon sticks and 2 cloves into a saucepan.</li>
          <li>Pour in 500ml boiling and bring to the boil. </li>
          <li>Lower the heat and simmer until fragrant – usually around 10 minutes.</li>
          <li>Once it has become fragrant, add your milk of choice and allow the tea to boil. Once it has risen to the top twice (making sure to not let it overflow), take it off the stove.</li>
          <li>Sieve the tea into cups and add sugar if you wish to, and serve.</li>
        </ol>
      </Typography>
    </div>
  );
  return RecipePage(Background, chai2, chai1, recipe)
}


export default Recipe;
