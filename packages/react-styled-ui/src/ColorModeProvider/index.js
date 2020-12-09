import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState, useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

const initialColorMode = 'light';
const ColorModeContext = React.createContext(initialColorMode);
const ColorModeSetterContext = React.createContext({});

const ColorModeProvider = ({
  value = initialColorMode,
  children,
}) => {
  const themes = useContext(ThemeContext);
  const [colorMode, setColorMode] = useState(value);
  const [colorStyle, setColorStyle] = useState(themes[value]);
  useEffect(() => {
    setColorMode(value);
  }, [value]);
  useEffect(() => {
    setColorStyle(themes[colorMode]);
  }, [colorMode, themes]);
  const toggleColorMode = useCallback(() => {
    setColorMode(prevColorMode => {
      const nextColorMode = {
        'light': 'dark', // light -> dark
        'dark': 'light', // dark -> light
      }[prevColorMode] || initialColorMode;
      return nextColorMode;
    });
  }, []);

  const colorModeSetterRef = useRef({
    setColorMode,
    toggleColorMode,
  });

  return (
    <ColorModeContext.Provider value={{ colorMode, colorStyle }}>
      <ColorModeSetterContext.Provider value={colorModeSetterRef.current}>
        {children}
      </ColorModeSetterContext.Provider>
    </ColorModeContext.Provider>
  );
};

ColorModeProvider.propTypes = {
  value: PropTypes.oneOf(['light', 'dark']),
};

ColorModeProvider.displayName = 'ColorModeProvider';

export default ColorModeProvider;
export { ColorModeContext, ColorModeSetterContext };
