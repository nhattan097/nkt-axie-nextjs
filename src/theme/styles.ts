import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';
import {
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from './foundations/typography';
import fonts from './foundations/fonts';
import sizes from './foundations/sizes';
import colors from './foundations/colors';

export const globalStyles = {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  fonts,
  sizes,
  styles: {
    global: (props: Dict<any> | StyleFunctionProps) => ({
      body: {
        bg: '#F6F7F8',
        color: '#252734',
        fontFamily: 'Poppins, sans-serif',
      },
      html: {
        fontFamily: 'Poppins, sans-serif',
      },
    }),
  },
};
