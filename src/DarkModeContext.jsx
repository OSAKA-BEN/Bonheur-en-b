import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export default DarkModeContext;

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired
};
