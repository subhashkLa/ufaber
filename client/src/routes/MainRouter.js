import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../core/Home';
import Mentor from '../core/Mentor';
import Menu from '../components/Menu';
import Profile from '../core/Profile';
import Update from '../core/Upadte';
import TaskMentor from '../core/Task';

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home}></Route>        
            <Route exact path="/mentorCreate" component={Mentor}></Route>        
            <Route exact path="/update/:userId" component={Update}></Route>        
            <Route exact path="/task/:userId" component={TaskMentor}></Route>        
            <Route exact path="/profile/:userId" component={Profile}></Route>        
        </Switch>
    </div>
)

export default MainRouter;