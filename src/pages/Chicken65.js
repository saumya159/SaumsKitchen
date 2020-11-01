import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RecipePage } from './components/RecipePage'
import chicken65 from '../images/chicken65.jpg';
import chicken651 from '../images/chicken651.jpg';
import Background from '../images/chicken652.jpg';
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
            House Special Chicken 65
      </Typography>
            <Typography variant="body1" align='left'>
                This chicken recipe is for all the spice lovers out there as it is high on spice quotient and can be prepared at home easily. How did chicken 65 get its name?
                So why is it called Chicken65 there are many theories .The first and most popular theory suggests that Chicken 65 was invented in Tamil Nadu by a gentleman called A.M. Buhari in the year 1965.
                One account suggests that soldiers in the Chennai canteen were presented a long menu which had this dish against the serial number 65 and so the dish got the name Chicken 65.
      </Typography>
            <Typography variant="h3" align='left'>
                Ingredients
      </Typography>
            {Ingredient('1 whole chicken', 'You can also use boneless chicken breasts. Around 4 breasts cut into cubes will do.')}
            {Ingredient('1 tbsp of ginger, minced')}
            {Ingredient('1 tbsp of garlic, minced')}
            {Ingredient('1 tbsp of freshly grounded black powder')}
            {Ingredient('1 tbsp of turmeric powder')}
            {Ingredient('1 tbsp of chilli powder')}
            {Ingredient('1 tbsp of yogurt')}
            {Ingredient('2 tsp of salt')}
            {Ingredient('2 cups of oil')}
            {Ingredient('2 tbsp corn flour, optionally 1 egg beaten for added crispiness')}
            {Ingredient('Optionally lime wedges, fried onions and coriander for garnish')}
            <Typography variant="h3" align='left'>
                Recipe
      </Typography>
            <Typography variant="body1" align='left'>
                <ol className={classes.instructions}>
                    <li>Chop the chicken into chunks small enough for frying.</li>
                    <li>Coat the chicken pieces in the garlic, ginger, spices and yogurt. If you chose to add corn flour and egg, include this now to the chicken.</li>
                    <li>Marinate for a minumum of 30 minutes.</li>
                    <li>Heat the oil in a deep pan.</li>
                    <li>Once the oil is hot enough, fry the chicken pieces. I usually do 3 pieces at a time, allowing it to fry for about 7-8 minutes.</li>
                    <li>Once cooked, drain of any excess oil.</li>
                    <li>Optionally add lime wedges, fried onions and coriander for garnish, then serve.</li>
                </ol>
            </Typography>
        </div>
    );
    return RecipePage(Background, chicken65, chicken651, recipe)
}


export default Recipe;
