import React from 'react';
import './App.css';
import test from './pages/test'
import test2 from './pages/test2'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import {increment} from './actions'




function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
     {counter}
     <button onClick={()=>dispatch(increment(5))}>+</button>
     <button>-</button>


        <Switch>
          <Route path='/test' component={test} />
          <Route path='/test2' component={test2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
