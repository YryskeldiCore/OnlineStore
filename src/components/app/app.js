import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import {Switch, Route} from 'react-router-dom';
import Background from './food-bg.jpg';
import ImageSlider from '../slider';
import Timer from '../timer';
import withRestoService from '../hoc';
import Tab from '../tab';
import './app.css';
import Modal from '../modal';
import Accordion from '../accordion';

const App = ({RestoService}) => {
    
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/cart' exact component={CartPage}/>
                <Route path='/:id' component={ItemPage}/>
            </Switch>
            <ImageSlider/>
            <Timer getData={RestoService.getTimeRem}/>
            <Tab/>
            <Modal/>
            <Accordion/>
        </div>
    )
}

export default withRestoService()(App);