import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { globalStyles } from './styles';
import { breakpoints } from './foundations/breakpoints';
import { badgeStyles } from './components/badge';
import { linkStyles } from './components/link';
import { buttonStyles } from './components/button';
// import { Checkbox } from './components/checkbox';

export default extendTheme(
  {
    breakpoints, // Breakpoints
    // components: { Checkbox },
  },
  globalStyles, // Global styles
  badgeStyles, // Badge styles
  linkStyles, // Link styles
  buttonStyles, // Link styles
  withDefaultColorScheme({
    colorScheme: 'dark',
    components: ['Checkbox'],
  }),
);
