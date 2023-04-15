import './Header.scss';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface themeType {
  theme: string;
  toggleTheme: () => void;
}
const Header = (props: themeType) => {
  const { theme, toggleTheme } = props;

  return (
    <>
      <div className="icon-position">
        <IconButton onClick={() => toggleTheme()} color="inherit">
          {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
      <div className="elements-position">
        <h1>Covid-19 Database</h1>
        <h3>
          Welcome to my app, where you can easily find out the statistics of a
          pandemic that has occurred in recent years around the world and is
          still happening today.
        </h3>
      </div>
    </>
  );
};

export default Header;
