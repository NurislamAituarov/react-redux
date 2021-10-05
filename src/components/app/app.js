import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc'
import Background from './food-bg.jpg';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

const App = ({ RestoService, items }) => {
    let total = items.map(elem => elem.price);
    let newTotal = total.reduce((acu, prev) => {
        return acu + prev
    }, 0)

    return (
        <div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
            <AppHeader total={newTotal} />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/cart" exact component={CartPage} />
            </Switch>
        </div>
    )
}
const total = ({ items }) => {
    return {
        items
    }
}

export default WithRestoService()(connect(total)(App));