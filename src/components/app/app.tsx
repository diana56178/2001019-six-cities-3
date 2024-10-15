import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.tsx';
import Main from '../../pages/main/main.tsx';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Layout from '../layout/layout.tsx';
import {getAuthorizationStatus} from '../../authorizationStatus.ts';

// type AppProps = {
//   offersCount: number;
// }

function App(): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={<Main />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer />}
          />
          <Route
            path={AppRoute.Login}
            element={(
              <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                <Login />
              </PrivateRoute>
            )}
          />
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
