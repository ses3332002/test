import React, { useState, createContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Users from '../Users/Users';
import Editor from '../Editor/Editor';
import Welcome from '../Welcome/Welcome';

export let AppContext = createContext(null);

export default function App() {
  let [curUser, setCurUser] = useState(null);
  return (
    <div>
      <AppContext.Provider
        value={{
          curUser,
          setCurUser,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/users" component={Users} />
            <Route path="/edit" component={Editor} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
