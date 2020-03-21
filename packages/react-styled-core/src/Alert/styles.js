import useColorMode from '../useColorMode';
import useTheme from '../useTheme';

const baseProps = {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  pl: '4x',
  pr: '4x',
  pt: '2x',
  pb: '2x',
  color: 'black:emphasis',
  fontSize: 'sm',
};

const styleProps = ({ color, theme: { colors } }, colorLevel) => {
  return {
    light: {
      bg: colors[`${color}:${colorLevel}`],
    },
    dark: {
      bg: colors[`${color}:${colorLevel}`]
    },
  };
};

const statusProps = props => {
  const status = props.status;

  switch (status) {
  case 'info':
  case 'error':
    return styleProps(props, 40);
  case 'warning':
    return styleProps(props, 50);
  default:
    return {};
  }
};

const useAlertStyle = props => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const _props = { ...props, theme };

  return {
    ...baseProps,
    ...statusProps(_props)[colorMode],
  };
};

export default useAlertStyle;