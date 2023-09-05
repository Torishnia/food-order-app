import { DUMMY_MEALS } from '../../../utils/data';

import styles from './index.module.scss';

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => <li>{meal.name}</li>)}
      </ul>
    </section>
  )
}

export default AvailableMeals;
