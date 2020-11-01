import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RecipePage } from './components/RecipePage'
import butterchicken1 from '../images/butterchicken1.jpg';
import butterchicken2 from '../images/butterchicken2.jpg';
import Background from '../images/butterchicken3.jpg';
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
                House Special Butter Chicken
      </Typography>
            <Typography variant="body1" align='left'>
                Have a takeaway favourite in your own home in 30 minutes. I promise you will never want to order takeaway curry after trying this. 
            </Typography>
            <Typography variant="h3" align='left'>
                Ingredients
      </Typography>
            {Ingredient('800g of boneless/skinless chicken thighs or breasts cut into cubes')}
            {Ingredient('4 tbsp of oil')}
            {Ingredient('2 tbsp of butter')}
            {Ingredient('2 tbsp of ginger garlic paste')}
            {Ingredient('2 tbsp of yogurt')}
            {Ingredient('1 medium onion chopped')}
            {Ingredient('400g of crushed tomatoes or tomato paste')}
            {Ingredient('25ml of water')}
            {Ingredient('1tsp of chilly powder')}
            {Ingredient('1tsp of tumeric powder')}
            {Ingredient('1tsp of pepper powder')}
            {Ingredient('1tsp of corriander powder')}
            {Ingredient('1tsp of garam masala powder')}
            {Ingredient('1tsp of salt')}
            {Ingredient('1 tbsp of chopped coriander')}
            {Ingredient('1 cup of double cream', 'To save calories, use evaporated milk.')}
            <Typography variant="h3" align='left'>
                Recipe
      </Typography>
            <Typography variant="body1" align='left'>
                <ol className={classes.instructions}>
                    <li>Cut the chicken into cubes and marinate with the chilli, tumeric, yogurt and salt for 30 minutes.</li>
                    <li>In a medium saucepan, add 2tbsp oil and heat. Once warm, grill the chicken cubes and set aside once browned. If you do not want to use oil, you can bake the chicken in an oven for 20 minutes at 180c.</li>
                    <li>In a medium saucepan, add the rest of the oil and butter. Add the chopped onions and the ginger garlic paste. Wait till the onions are brown.</li>
                    <li>Add the tomatoes and let them cook down. If it starts to stick to the saucepan, add a little water till it forms a paste. Add the remaining spices once they have cooked off, then remove from the heat.</li>
                    <li>Once the onion tomato paste has cooled you will need to blend this till smooth you may need to add 3 tbsp of water depending on the consistency</li>
                    <li> Add the chicken back in the pan and combine the sauce and cover for 7 minutes till its come together</li>
                    <li>Once the curry is ready you can add double cream and corriander if you wish just before serving you can have this with rice,naan or roti </li>
                </ol>
            </Typography>
        </div>
    );
    return RecipePage(Background, butterchicken1, butterchicken2, recipe)
}


export default Recipe;

