import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Navbar from '../components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import RedirectTo404 from './components/RedirectTo404';

// List of Routes
import routes from './routeList';

// Views
import Landing from '../views/Landing';
import SignIn from '../views/SignIn';

const AppRouter = () => (
  <Suspense fallback={null}>
    <ScrollToTop>
      <Navbar />
      <Switch>
        <Route exact path={routes.landing} component={Landing} />
        <Route exact path={routes.signIn} component={SignIn} />
        <RedirectTo404 />
      </Switch>
    </ScrollToTop>
  </Suspense>
);

export default AppRouter;
