import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Users from '../Users/Users';
import Editor from '../Editor/Editor';
import Welcome from '../Welcome/Welcome';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/users" component={Users} />
          <Route path="/edit">
            <Editor prop1={1} prop2="2" />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
