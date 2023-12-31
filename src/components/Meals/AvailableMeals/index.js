import { useEffect, useState } from 'react';

import Card from '../../UI/Card';
import MealItem from '../MealItem';
import styles from './index.module.scss';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://food-order-fcd1a-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) {
        throw new Error('Someting went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    }

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [])

  if (httpError) {
    return (
      <section className={styles.meals_error}>
        <p>Someting went wrong!</p>
      </section>
    )
  }

  return (
    <>
      {isLoading
        ? (<section className={styles.meals_loading}>
            <p>Loading...</p>
          </section>)
        : (<section className={styles.meals}>
            <Card>
              <ul>
                {meals.map((meal) => 
                  <MealItem
                    key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price}
                  />
                )}
              </ul>
            </Card>
          </section>)
      }
    </>
  )
}

export default AvailableMeals;
