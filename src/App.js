import React from 'react';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Info from './Components/Info';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/:characterName">
                    <Info/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}