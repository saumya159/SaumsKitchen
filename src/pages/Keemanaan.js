import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RecipePage } from './components/RecipePage'
import keemanaan1 from '../images/keemanaan1.jpg';
import keemanaan2 from '../images/keemanaan2.jpg';
import Background from '../images/keemanaan3.jpg';
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
                House Special Keema Naan
      </Typography>
            <Typography variant="body1" align='left'>
                Naan is a popular type of bread from the Indian cuisine and is majorly enjoyed with different varieties of sabjis as well as dals.
                You can easily find several variations of this popular bread which are stuffed and super-tasty.
      </Typography>
            <Typography variant="h3" align='left'>
                Ingredients
      </Typography>
            <Typography variant="h5" align='left'>Naan</Typography>
            {Ingredient('250g of plain flour')}
            {Ingredient('250ml of plain yogurt')}
            {Ingredient('1/2 tsp of salt')}
            {Ingredient('1 tsp of baking powder')}
            {Ingredient('For paste, 1 tbp of plain flour and water')}
            <Typography variant="h5" align='left'>Keema Filling</Typography>
            {Ingredient('300g minced lamb', 'Can be replaced by chicken.')}
            {Ingredient('3 tbsp of oil')}
            {Ingredient('1 medium onion, chopped')}
            {Ingredient('1 tbp of ginger garlic paste')}
            {Ingredient('1 tsp of chilli powder')}
            {Ingredient('1 tsp of tumeric powder')}
            {Ingredient('1tsp of pepper powder')}
            {Ingredient('1tsp of garam masala')}
            {Ingredient('1tsp of salt')}
            {Ingredient('4 medium potatoes, boiled')}
            <Typography variant="h3" align='left'>
                Recipe
      </Typography>
            <Typography variant="body1" align='left'>
                <ol className={classes.instructions}>
                    <li>To prepare the naan dough, mix the yogurt, flour, salt and baking powder together. If you have self raising flour, you can leave out the baking powder.</li>
                    <li>Heat the oil in a pan. Add the chopped onion and ginger garlic paste. Allow the onions to soften.</li>
                    <li>Cut the potatoes into cubes, and put them into a pan with water 100ml to boil and become soft.</li>
                    <li>Add the mince of choice, and allow this to brown. Once browned, you can add all the spices to the pan.</li>
                    <li>Add any additional vegatables. I chose potatoes in this case, then mix the vegetables with the mince. Switch off the heat and allow to cool.</li>
                    <li>To assemble the naan, roll out the dough into small balls, then roll into a circle. If it's too sticky, add more flour.</li>
                    <li>Add 1 tbsp of the mince mixture onto the rolled out dough. Spread it out leaving space around the edges.</li>
                    <li>In a small bowl, comibine the remaining flour and water to make a paste.</li>
                    <li>Using this paste, we can seel the naan. Roll out another dough ball, and place this on the top of the naan, whilst seeling it with the paste.</li>
                    <li>Using a pan, apply 1 tbsp oil if needed and cook the naan both sides till golden, then serve.</li>
                </ol>
            </Typography>
        </div>
    );
    return RecipePage(Background, keemanaan2, keemanaan1, recipe)
}


export default Recipe;