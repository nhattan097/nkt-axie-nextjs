import { ChakraProvider } from '@chakra-ui/react';
import theme from '~/theme';

// styles
import 'swiper/css';
import 'swiper/css/pagination';
import '~/styles/swipe.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
