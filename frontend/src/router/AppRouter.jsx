import React, { Suspense } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

// Components
import NavBarComponent from '../Components/Landing/NavBarComponent';
import ScrollToTop from   './components/ScrollToTop';
import RedirectTo404 from './components/RedirectTo404/index';

// List of Routes
import routes from './routeList';

// Views
import Landing from '../Views/Landing/index';
import SignIn from '../Views/SignIn/index';

const AppRouter = () => {
  return(
    <Suspense fallback={null}>
      <ScrollToTop>
      <NavBarComponent />
      <Routes>
        <Route path={routes.landing}  element={<Landing />}       />
        <Route path={routes.signIn}   element={<SignIn /> }       />
        <Route path={routes.notFound} element={<RedirectTo404 />} />
      </Routes>
      </ScrollToTop>
    </Suspense>
  )
};

export default AppRouter;
