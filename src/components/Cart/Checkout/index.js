import { useRef, useState } from 'react';
import styles from './index.module.scss';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;
const isTenChars = (value) => value.trim().length === 10;

const Checkout = ({ onCancel }) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    phone: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPhoneIsValid = isTenChars(enteredPhone);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      phone: enteredPhoneIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    })

    const formIsValid = 
      enteredNameIsValid &&
      enteredPhoneIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
  }

  const nameControlClasses = `${styles.control} ${
    formInputsValidity.name ? '' : styles.invalid
  }`;
  const phoneControlClasses = `${styles.control} ${
    formInputsValidity.phone ? '' : styles.invalid
  }`;
  const streetControlClasses = `${styles.control} ${
    formInputsValidity.street ? '' : styles.invalid
  }`;
  const postalCodeControlClasses = `${styles.control} ${
    formInputsValidity.postal ? '' : styles.invalid
  }`;
  const cityControlClasses = `${styles.control} ${
    formInputsValidity.city ? '' : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <input
          id='name'
          type='text'
          ref={nameInputRef} 
          placeholder='Name'
        />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={phoneControlClasses}>
        <input
          id='phone'
          type='number'
          ref={phoneInputRef}
          placeholder='Phone'
        />
        {!formInputsValidity.phone && <p>Please enter a valid phone (10 characters long)!</p>}
      </div>
      <div className={streetControlClasses}>
        <input
          id='street'
          type='text'
          ref={streetInputRef}
          placeholder='Street'
        />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <input
          id='postal'
          type='text'
          ref={postalCodeInputRef}
          placeholder='Postal Code'
        />
        {!formInputsValidity.postal && <p>Please enter a valid postal code (5 characters long)!</p>}
      </div>
      <div className={cityControlClasses}>
        <input
          id='city'
          type='text'
          ref={cityInputRef}
          placeholder='City'
        />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={styles.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout;
