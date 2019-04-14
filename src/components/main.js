import React from 'react';
import {Switch,Route} from "react-router-dom";
import LandingPage from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';

const main = ()=>(
    <Switch>
        <Route exact path = '/' component = {LandingPage}/>
        <Route exact path = '/aboutme' component = {About}/>
        <Route exact path = '/projects' component = {Projects}/>
        <Route exact path = '/resume' component = {Resume}/>
        <Route exact path = '/contact' component = {Contact}/>
    </Switch>
)

export default main;