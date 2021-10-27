import { BrowserRouter,Router, Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import {createBrowserHistory} from 'history';
const MainPage = React.lazy(() => import("../components/mainPage"));
const SubComponent=React.lazy(()=>import('../components/subComponent'))
export const customHistory = createBrowserHistory();
export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/data/:value/:id">
          <Suspense fallback={<div>Loading... </div>}>
            <SubComponent />
          </Suspense>
        </Route>

        <Route exact path="/">
          <Suspense fallback={<div>Loading... </div>}>
            <MainPage />
          </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
