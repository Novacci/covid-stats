import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { useState } from 'react';

type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div className="background-color" data-theme={theme}>
        <Header theme={theme} toggleTheme={() => toggleTheme()} />
        <Main />

        <Footer />
      </div>
    </>
  );
}

export default App;
