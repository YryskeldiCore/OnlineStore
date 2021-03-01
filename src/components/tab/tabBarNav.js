import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './nav-item.css';

const TabBarNav = ({navLabel, className, onChangeActiveTab}) => {

    const classes = classNames(className, 'nav-item');

    return(
        <button 
            type="button"
            className={classes}
            onClick={() => onChangeActiveTab(navLabel)}>
            {navLabel}
        </button>
    )
}

TabBarNav.propTypes = {
    newLabel: PropTypes.string,
    className: PropTypes.string,
    onChangeActiveTab: PropTypes.func
}

TabBarNav.defaultProps = {
    newLabel: 'Tab',
    className: '',
    onChangeActiveTab: () => {}
}

export default TabBarNav;

