import React from 'react';
import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div className="background-color " data-theme={theme}>
        <Header theme={theme} toggleTheme={() => toggleTheme()} />
        <Main />

        <Footer />
      </div>
    </>
  );
}

export default App;
