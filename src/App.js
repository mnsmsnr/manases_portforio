import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { Header } from './header';
import { Footer } from './footer';
import { Helmet, HelmetProvider } from "react-helmet-async";

const Contents = () => { 
  return(
    <HelmetProvider>
      <Helmet>
          <title>Manase`s Portfolio</title>
      </Helmet>
      <Switch>
        {Routes.map((route, idx) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={idx}
          />
        ))}
      </Switch>
    </HelmetProvider>
  )
}

export const App = () => {
  return (    
      <BrowserRouter>
        <Header />
        <Contents />
        <Footer />
      </BrowserRouter>
  );
};