import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RecipePage } from './components/RecipePage'
import tiramisu2 from '../images/tiramisu2.jpg';
import tiramisu1 from '../images/tiramisu1.jpg';
import Background from '../images/tiramisu3.jpg';
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
                House Special Tiramisu
      </Typography>
            <Typography variant="body1" align='left'>
                Tiramisu is a simple lushous dessert found in Italy the longer you leave it to sit the more intense the flavour
                Tiramisu is an Italian dessert made of savoiardi ladyfingers soaked in coffee, arranged in layers and filled with a cream made with mascarpone.
      </Typography>
            <Typography variant="h3" align='left'>
                Ingredients
      </Typography>
            {Ingredient('200 g Ladyfingers Biscuits *I used the vanilla and chocolate ones')}
            {Ingredient('2 tablespoons of MARSALA wine (optional)')}
            {Ingredient('1 tablespoons of vanilla extract')}
            {Ingredient('4 tbsp. granulated sugar')}
            {Ingredient('2 tbsp coffee')}
            {Ingredient('300ml boiled water')}
            {Ingredient('250gm Mascarpone')}
            {Ingredient('560ml double cream')}
            {Ingredient('1tbsp coco powder or 1 piece dark chocolate grated')}
            <Typography variant="h3" align='left'>
                Recipe
      </Typography>
            <Typography variant="body1" align='left'>
                <ol className={classes.instructions}>
                    <li>Put the double cream, mascarpone, marsala ,vanilla and golden caster sugar in a large bowl.</li>
                    <li>Using an electric whisk mix them till they are combined and becomes thicker like whipped cream</li>
                    <li>In a small bowl combine the boiling water and coffee whisk together and allow to cool down</li>
                    <li>Once the coffee is cooled you will want to take the ladyfingers and dip in the coffee do this quickly as they will become mushy I placed them in and turned them once and removed them</li>
                    <li>Line your tin of choice with the soaked lady fingers to create a layer then add half your marscarpone mix and smooth it to create another layer </li>
                    <li>Repeat this till your have used up all the mixture I pipped the remaining cream and then dusted with coco powder</li>
                    <li>Ideally you should leave it to sit in the fridge for at least 4-5 hours overnight is best but if you can't wait that long you can dig in </li>
                </ol>
            </Typography>
        </div>
    );
    return RecipePage(Background, tiramisu2, tiramisu1, recipe)
}


export default Recipe;

