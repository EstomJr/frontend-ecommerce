import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Looks = lazy(()=> import('./components/Looks'));
const Cadastro = lazy(() => import('./components/Cadastro'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Cadastro}/>
        <Route exact path="/looks" component={Looks}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;