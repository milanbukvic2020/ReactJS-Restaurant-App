import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals1.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes['header']}>
        <h1>Restaurant Rhytm & Blues</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Sve o muzici...." />
      </div>
    </Fragment>
  );
};

export default Header;
