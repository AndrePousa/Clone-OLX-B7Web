import React from "react";
import { Switch, Route  } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import NotFound from'./pages/notFound';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import AdPage from './pages/adPage';


const Routes = ()=> {
  return(
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact path='/signIn'>
        <SignIn/>
      </Route>
      <Route exact path='/signUp'>
        <SignUp/>
      </Route>
      <Route exact path='/ad/:id'>
        <AdPage/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
}

export default Routes;