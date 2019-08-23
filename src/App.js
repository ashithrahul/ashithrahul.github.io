import '@babel/polyfill';
import React from 'react';
import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import Hello from '../components/Hello/Hello';
import Menu from '../components/Menu/Menu';
import Resume from '../components/Resume/Resume';

export const GlobalContext = React.createContext({});

const App = () => (
  <GlobalContext.Provider>
    <Menu />
    <Header />
    <Hello />
    <hr />
    <Resume />
    <Contact />
  </GlobalContext.Provider>
);
export default App;
