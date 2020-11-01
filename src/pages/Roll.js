import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RecipePage } from './components/RecipePage'
import roll2 from '../images/roll3.jpg';
import roll1 from '../images/roll2.jpg';
import Background from '../images/roll1.jpg';
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
                Ladi Pav
      </Typography>
            <Typography variant="body1" align='left'>
                Pav is a type of bread and ladi means a line or block of dough stuck together.
                Combined, it signifies a chunk of bread dough joined together.
                Ladi Pav is a very popular recipe from Mumbai, which, over time, has become a real staple bread in the Maharashtrian cuisine.
            </Typography>
            <Typography variant="h3" align='left'>
                Ingredients
      </Typography>
      <Typography variant="h5" align='left'>The Yeast</Typography>
            {Ingredient('7g 1 packet Active dry yeast')}
            {Ingredient('2½ tablespoons Sugar')}
            {Ingredient('3 tablespoons Water')}
            {Ingredient('3 teaspoons Milk')}
       <Typography variant="h5" align='left'>The Rolls</Typography>
       
            {Ingredient('384g Plain flour')}
            {Ingredient('1 tsp Baking powder')}
            {Ingredient('1½ teaspoons Salt')}
            {Ingredient('3 tbsp Unsalted Butter')}
            {Ingredient('2 tbsp Oil')}
            {Ingredient('60 ml  Water or Milk')}
            {Ingredient('1tbsp butter to grease the tin')}
            {Ingredient('2 tbsp milk to coat buns with')}
            <Typography variant="h3" align='left'>
                Recipe
      </Typography>
            <Typography variant="body1" align='left'>
                <ol className={classes.instructions}>

                    <li>For few seconds warm up milk, water, and sugar.Milk and water should be lukewarm otherwise it will kill the yeast.
                    Take it off the flame and mix in the yeast.You should see it start to bubble leave this on the side for 5-10 minutes</li>
                    <li>In a bowl combine flour with salt and baking powder. Mix it well. Slowly and gradually add water/milk.</li>
                    <li>Add yeast and mix until combined.Add butter and oil to the flour. Mix until fully incoprporated.</li>
                    <li>Knead the dough for 5-10 minutes.
                    The dough should be smooth.Transfer the dough to a bowl. Cover the dough with a wet towel.
                    And set it in a warm place for at least 1- 2 hours. The dough will double in size. The dough should be all airy and puffed up. </li>
                    <li>Remove the dough from the bowl, dust it with some flour and start kneading the dough.</li>
                    <li>Make into balls and leave spaced out in the greased tin and cover again with the wet towel for 30 minutes this is the final stage of prooving the dough</li>
                    <li>Preheat your oven to 200c</li>
                    <li> Brush pavs with milk and Bake them in a preheated oven for 15-20 minutes they should start to brown when you can press a knife of the bread and it bounces back the bread will be ready </li>
                    <li>Allow it to cool and rest in the tin before removing you may want to run a knife around the edges to help this.</li>
                </ol>
            </Typography>
        </div>
    );
    return RecipePage(Background, roll2, roll1, recipe)
}


export default Recipe;