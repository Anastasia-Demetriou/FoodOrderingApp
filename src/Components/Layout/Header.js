import React from "react";
import { Fragment } from "react";

import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (<Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src="https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-600w-722718097.jpg" alt="A table full of food"/>
        </div>

    </Fragment>

    );

}

export default Header;