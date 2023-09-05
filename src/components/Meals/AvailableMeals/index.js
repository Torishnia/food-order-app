import { DUMMY_MEALS } from '../../../utils/data';
import Card from '../../UI/Card';
import MealItem from '../MealItem';

import styles from './index.module.scss';

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => 
            <MealItem 
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          )}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals;
