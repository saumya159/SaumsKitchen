import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RecipePage } from './components/RecipePage'
import applerose1 from '../images/applerose2.jpg';
import applerose2 from '../images/applerose3.jpg';
import Background from '../images/applerose1.jpg';
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
                Apple Roses
      </Typography>
            <Typography variant="body1" align='left'>
                These are boujee apple pies, that taste as good as they look. They may look complicated, but are simple to make. A great way to start off the Autumn season!
      </Typography>
            <Typography variant="h3" align='left'>
                Ingredients
      </Typography>
            {Ingredient('1 roll of puff pastry', 'For ease, use pre-made store bought puff pastry')}
            {Ingredient('2 apples, thinly sliced')}
            {Ingredient('1 tbsp of apricot jam' ,'Feel free to replace with any jam you like!')}
            {Ingredient('1 tsp of cinammon powder')}
            {Ingredient('1 tsp of lemon juice')}
            {Ingredient('1 tsp of butter, to grease the tin')}
            {Ingredient('1 tbsp of icing sugar, to dust')}
            <Typography variant="h3" align='left'>
                Recipe
      </Typography>
            <Typography variant="body1" align='left'>
                <ol className={classes.instructions}>
                    <li>Pre-heat your oven to 180 celcius.</li>
                    <li>Slice the apples sideways. Remove the core if you wish to make sure they are thin.</li>
                    <li>Put the applies into the microwave for 30 to 45 seconds, making the apples soft enough to roll.</li>
                    <li>Add lemon juice and cinammon powder to the apples, and stir.</li>
                    <li>Roll out the puff pastry then cut into 1cm strips.</li>
                    <li>Line up the apples along the top of the pastry strips, and add the jam onto the bottom of the pastry. Fold over and gently roll up the apples.</li>
                    <li>Take your prepared roses and place in a greased muffin tin.</li>
                    <li>Bake for 25 minutes till the pastry is golden brown.</li>
                    <li>Allow the tarts to cool, and then dust with icing sugar if you wish.</li>
                </ol>
            </Typography>
        </div>
    );
    return RecipePage(Background, applerose1, applerose2, recipe)
}


export default Recipe;

