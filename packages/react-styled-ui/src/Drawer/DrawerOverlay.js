import React, { forwardRef } from 'react';
import Box from '../Box';
import Fade from '../Transitions/Fade';
import useColorMode from '../useColorMode';
import { useDrawer } from './context';

const DrawerOverlay = forwardRef(({
  TransitionComponent = Fade,
  ...props
}, ref) => {
  const [colorMode] = useColorMode();
  const backgroundColor = {
    dark: 'rgba(0, 0, 0, .7)',
    light: 'rgba(0, 0, 0, .7)', // TBD: light mode is not defined yet
  }[colorMode];
  const overlayStyleProps = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: backgroundColor,
    zIndex: 'drawer',
  };
  const context = useDrawer(); // context might be an undefined value

  if (context) {
    return (
      <TransitionComponent in={context?.isOpen}>
        {(state, { ref, style }) => (
          <Box
            ref={ref}
            {...overlayStyleProps}
            {...style}
            {...props}
          />
        )}
      </TransitionComponent>
    );
  }

  return (
    <Box ref={ref} {...overlayStyleProps} />
  );
});

DrawerOverlay.displayName = 'DrawerOverlay';

export default DrawerOverlay;
