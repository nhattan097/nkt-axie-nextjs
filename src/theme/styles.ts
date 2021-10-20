import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';
import typography from './foundations/typography';

export const globalStyles = {
  colors: {
    primaryDark: '#252734',
    primaryLight: '#F6F7F8',

    secondDark: '#343646',

    number: '#11142D',
  },
  fontSizes: {
    ...typography.fontSizes,
  },
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
