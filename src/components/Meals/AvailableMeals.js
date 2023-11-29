import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Becka snicla',
    description: 'Najkvalitetnije meso',
    price: 1000.0,
  },
  {
    id: 'm2',
    name: 'Karadjordjeva  snicla',
    description: 'U najukusnijem sosu',
    price: 1200.0,
  },
  {
    id: 'm3',
    name: 'Punjena paprika',
    description: 'Srpski specijalitet',
    price: 800.0,
  },
  {
    id: 'm4',
    name: 'Sarma',
    description: 'Specijalitet kuce',
    price: 1500.0,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul> {mealsList} </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
