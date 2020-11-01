import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RecipePage } from './components/RecipePage'
import coffee2 from '../images/coffee2.jpg';
import coffee1 from '../images/coffee1.jpg';
import Background from '../images/coffee3.jpg';
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
      Dalgona Coffee
      </Typography>
      <Typography variant="body1" align='left'>
        Dalgona is a whipped drink made with instant coffee, sugar, and milk. During quarinitne this drink has become extremely popular on  TikTok and instagram ,  and anyone with some spare time on their hands have been *literally*  whipping up this supposedly new coffee trend.
        Its modern popularity stems from a South Korean TV show, but similar whipped instant coffee drinks can be found around the world, including India, Pakistan, Greece, and Macau.
        If you are brave enough to whip this up with a hand whisk by all means get that arm workout I chose to use my electric hand mixer for this.
      </Typography>
      <Typography variant="h3" align='left'>
        Ingredients
      </Typography>
      {Ingredient('2 tbsp granulated sugar')}
      {Ingredient('2 tbsp of instant coffee. I prefer use the Beanies flavoured coffees!')}
      {Ingredient('2 tbsp of cold water')}
      {Ingredient('50ml of Milk', 'Vegan Alternative: Soya milk. For people who prefer a sweeter taste, almond milk.')}
      {Ingredient('4 ice cubes to serve.')}
      <Typography variant="h3" align='left'>
          Recipe
      </Typography>
        <Typography variant="body1" align='left'>
          <ol className={classes.instructions}>
            <li>In a medium bowl, combine the sugar, coffee, and water.</li>
            <li>Using a hand mixer or a whisk, whisk until mixture turns silky smooth and shiny, then continue whisking until it thickens and holds a lofty, foamy shape. (If whisking by hand, it will take 8 to 12 minutes to get to optimal fluffiness.)</li>
            <li>Fill a glass most of the way full with ice and milk, then dollop and swirl the whipped coffee mixture on top. You can also add some chocolate or caramel syrup if you want to be fancy or even a scoop of ice cream.</li>
          </ol>
        </Typography>
      </div>
  );
  return RecipePage(Background, coffee2, coffee1, recipe)
}


export default Recipe;

