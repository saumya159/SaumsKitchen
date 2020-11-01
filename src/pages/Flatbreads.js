import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RecipePage } from './components/RecipePage'
import flatbread1 from '../images/flatbread1.jpg';
import flatbread2 from '../images/flatbread2.jpg';
import Background from '../images/flatbread3.jpg';
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
            House Special Desi Tacos
      </Typography>
            <Typography variant="body1" align='left'>
            This is my quick fix when I am craving tacos. 
            These wonderful, soft but slightly charred, yeast-free breads (also known as soft tortillas) are a staple. 
            I could eat a whole pile of them, hot from the pan.
            I used them as a taco for this quick and simple lunch idea you can use what ever filling you like.
            </Typography>
            <Typography variant="h3" align='left'>
                Ingredients
      </Typography>
            {Ingredient('Folded Flatbreads', 'I like to keep it cheap and simple, Aldi flatbreads usually do the trick :)')}
            {Ingredient('BBQ chicken shredded')}
            {Ingredient('1/4 of a cucumber, cubed')}
            {Ingredient('1 sprig of coriander')}
            {Ingredient('2 tsp of west indies chilli sauce')}
            {Ingredient('1/2 a lime, cut into wedges')}
            {Ingredient('1tsp of garlic mayonnaise')}
            <Typography variant="h3" align='left'>
                Recipe
      </Typography>
            <Typography variant="body1" align='left'>
                <ol className={classes.instructions}>
                    <li>In a medium pan, warm the flatbreads. If you prefer to make your own flatbreads, you can mix 250g of self-raising flour with yogurt creating a dough to roll out (instant flatbreads).</li>
                    <li>Shread up your filling of choice. I prefer to use BBQ marinated whole chicken.</li>
                    <li>Cut up the veggies of choice into cubes.</li>
                    <li>Take the flatbreads off the heat once toasted. Assemble with the fillings and serve.</li>
                </ol>
            </Typography>
        </div>
    );
    return RecipePage(Background, flatbread2, flatbread1, recipe)
}


export default Recipe;

