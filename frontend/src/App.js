import React from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from './routes'

const getRoutes = (allRoutes) => {}
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" />
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
   )
}

export default App
