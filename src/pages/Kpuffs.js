import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RecipePage } from './components/RecipePage'
import kpuffs2 from '../images/kpuffs2.jpg';
import kpuffs1 from '../images/kpuffs1.jpg';
import Background from '../images/kpuffs3.jpg';
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
                House Special Kerala Puffs
      </Typography>
            <Typography variant="body1" align='left'>
                Kerala puffs are a popular snack found in many traditional bakeries in Kerala they are similar to the pasties you find in Greggs in the UK
                They have more spices in them the most commonly found flavours are Chicken,Egg,Vegatable and lamb you can use whichever you like you would just substitute the lamb for your filling of choice.
                There are a  a must-try snack that pairs perfectly with your afternoon chai .
            </Typography>
            <Typography variant="h3" align='left'>
                Ingredients
      </Typography>
            {Ingredient('1 roll of puff pastry')}
            {Ingredient('300g of minced Lamb', 'If you prefer you can use chicken.')}
            {Ingredient('2 tbsp of oil')}
            {Ingredient('1 medium onion, chopped')}
            {Ingredient('1tbsp of ginger garlic paste')}
            {Ingredient('1tsp of chilly powder')}
            {Ingredient('1tsp of tumeric powder')}
            {Ingredient('1tsp of pepper powder')}
            {Ingredient('1tsp of coriander powder')}
            {Ingredient('1tsp of garam masala powder')}
            {Ingredient('1tsp of salt')}
            {Ingredient('1 egg, beaten')}
            <Typography variant="h3" align='left'>
                Recipe
      </Typography>
            <Typography variant="body1" align='left'>
                <ol className={classes.instructions}>
                    <li>Preheat your oven to 180 celcius.</li>
                    <li>Heat the oil in a medium pan. Add the chopped onion and ginger garlic paste, allowing the onions to soften.</li>
                    <li>Add the mince of choice. I used lamb, then brown off the meat.</li>
                    <li>Add the spice and cook into the mince.</li>
                    <li>Switch off the heat and allow the mince to cool.</li>
                    <li>To prepare the pastry, roll out the puff pastry and cut into squares or triangles.</li>
                    <li>Add a tbsp of mince mixture into each square and fold over to seal. You can use a fork to create a pattern around the edges.</li>
                    <li>Coat each square in egg wash and place on a lined baking tray.</li>
                    <li>Bake in the oven for 20 to 25 minutes till the puffs are golden. You can serve these with spicy ketchup and chai. Check out my masala chai recipe if you wish to try this combination!</li>
                </ol>
            </Typography>
        </div>
    );
    return RecipePage(Background, kpuffs2, kpuffs1, recipe)
}


export default Recipe;