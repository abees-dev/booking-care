import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/home';
import routes from './routes';
import 'normalize.css';
import 'swiper/css';

const getRoutes = (allRoutes) => {};
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            {routes.map((route) => (
               <Route
                  key={route.key}
                  path={route.route}
                  element={route.component}
               />
            ))}
            {getRoutes(routes)}
         </Routes>
      </>
   );
};

export default App;
