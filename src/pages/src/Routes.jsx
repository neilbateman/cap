import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Faqs from './Pages/Faqs';
import Runners from './Pages/Runners';
import Zombies from './Pages/Zombies';
import Album from './Components/Album';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/faq" component={Faqs}/>
    <Route path="/runners" component={Runners}/>
    <Route path="/zombies" component={Zombies}/>
    <Route path="/album" component={Album}/>
    </Switch>
);
export default Routes;
