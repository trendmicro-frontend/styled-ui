import { get } from '@styled-system/core';
import useColorMode from '../useColorMode';
import useColorStyle from '../useColorStyle';
import useTheme from '../useTheme';

const defaultSize = 'auto';

const getSizeProps = (size) => {
  size = size ?? defaultSize;

  return {
    xs: {
      width: 352,
      minHeight: 240,
      maxHeight: '80vh',
    },
    sm: {
      width: 512,
      minHeight: 320,
      maxHeight: '80vh',
    },
    md: {
      width: 672,
      minHeight: 320,
      maxHeight: '80vh',
    },
    lg: {
      width: 832,
      minHeight: 320,
      maxHeight: '80vh',
    },
    xl: {
      width: 992,
      minHeight: 320,
      maxHeight: '80vh',
    },
    full: {
      maxWidth: '100%'
    },
    auto: {
      width: 'auto',
    },
  }[size];
};

const useModalCloseButtonStyle = () => {
  const [colorMode] = useColorMode();
  const { colors } = useTheme();
  const color = {
    dark: 'white:tertiary',
    light: 'black:tertiary',
  }[colorMode];
  const hoverColor = {
    dark: 'white:emphasis',
    light: 'black:primary',
  }[colorMode];
  const activeColor = color;
  const focusColor = color;
  const focusHoverColor = hoverColor;
  const focusActiveColor = activeColor;
  const focusBorderColor = get(colors, 'blue:60');

  return {
    position: 'absolute',
    top: '2x',
    right: '2x',
    border: 1,
    borderColor: 'transparent',
    color: color,
    transition: 'all .2s',
    lineHeight: 1,
    height: '8x',
    width: '8x',
    minWidth: '8x', // ensure a minimum width for the close button
    px: 0,
    py: 0,
    _hover: {
      color: hoverColor,
    },
    _active: {
      color: activeColor,
    },
    _focus: {
      borderColor: focusBorderColor,
      boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,
      color: focusColor,
    },
    _focusHover: {
      color: focusHoverColor,
    },
    _focusActive: {
      borderColor: focusBorderColor,
      boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,
      color: focusActiveColor,
    },
  };
};

const useModalContentStyle = ({ size }) => {
  const [colorMode] = useColorMode();
  const [colorStyle] = useColorStyle({ colorMode });
  const baseStyle = {
    mx: 'auto',
    height: 'auto',
    top: 0,
    display: 'flex',
    flexDirection: 'column',
  };
  const colorModeStyle = {
    light: {
      color: 'black:primary',
      bg: 'white',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'gray:20',
      boxShadow: colorStyle?.shadow?.thick,
    },
    dark: {
      color: 'white:primary',
      bg: 'gray:90',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'gray:80',
      boxShadow: colorStyle?.shadow?.thick,
    },
  }[colorMode];
  const sizeProps = getSizeProps(size);

  return {
    ...baseStyle,
    ...colorModeStyle,
    ...sizeProps,
  };
};

const useModalHeaderStyle = () => {
  return {
    pt: '4x',
    pb: '3x',
    pl: '6x',
    pr: '12x',
    position: 'relative',
    fontSize: 'xl',
    lineHeight: 'xl',
  };
};

const useModalBodyStyle = () => {
  const { sizes, lineHeights } = useTheme();

  return {
    px: '6x',
    pb: '6x',
    flex: 1,
    height: 'auto',
    overflowY: 'auto',
    _firstOfType: {
      marginTop: `calc(${get(sizes, '4x')} + ${get(lineHeights, 'xl')} + ${get(sizes, '3x')})`,
    },
  };
};

const useModalFooterStyle = () => {
  const [colorMode] = useColorMode();
  const { sizes, lineHeights } = useTheme();
  const borderColor = {
    dark: 'gray:80',
    light: 'gray:20', // TBD: light mode is not ready yet
  }[colorMode];

  return {
    display: 'flex',
    justifyContent: 'flex-end',
    px: '6x',
    py: '4x',
    borderTop: 1,
    borderTopColor: borderColor,
    _firstOfType: {
      marginTop: `calc(${get(sizes, '4x')} + ${get(lineHeights, 'xl')} + ${get(sizes, '3x')})`,
    },
  };
};

export {
  useModalCloseButtonStyle,
  useModalContentStyle,
  useModalHeaderStyle,
  useModalBodyStyle,
  useModalFooterStyle,
};
