import React from 'react';
import {Router, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './App.css';
import history from './history';

import Title from './title/Title';
import Home from './home/Home';
import Mnist from './mnist/Mnist';
import Tutorial from './tutorial/Tutorial';
import Article from './article/Article';
import Project from './project/Project';
import Member from './member/Member';



function App() {

  return (
    <div className='App'>
      <Router history={history}>
      <ScrollToTop >
        
        <Route exact path={'/QuantumFrontier/'} component={Title}/>
        <Route path={'/QuantumFrontier/home'} component={Home}/>
        <Route path={'/QuantumFrontier/mnist'} component={Mnist} />
        <Route path={'/QuantumFrontier/tutorial'} component={Tutorial}/>
        <Route path={'/QuantumFrontier/article'} component={Article} />
        <Route path={'/QuantumFrontier/project'} component={Project} />
        <Route path={'/QuantumFrontier/member'} component={Member} />

        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;