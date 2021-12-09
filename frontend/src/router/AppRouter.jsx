import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Components
import NavBarComponent from '../Components/Landing/NavBarComponent';
import ScrollToTop from   './components/ScrollToTop';
import RedirectTo404 from './components/RedirectTo404';

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
        <Route exact path={routes.landing} element={<Landing />} />
        <Route exact path={routes.signIn}  element={<SignIn />}  />
        <Route exact path={'/not_found'}   element={<RedirectTo404 />} />
      </Routes>
      </ScrollToTop>
    </Suspense>
  )
};

export default AppRouter;
