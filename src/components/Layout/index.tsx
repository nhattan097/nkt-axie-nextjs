import { Box, Grid } from '@chakra-ui/react';

import Content from './Content';
import Header from './Header';
import Logo from './Logo';
import Sidebar from './Sidebar';

const Layout = ({ children, name }) => {
  return (
    <Box>
      <Grid
        h="100vh"
        gridTemplateColumns={{
          base: '256px 1fr',
        }}
        gridTemplateRows={{
          base: '126px 1fr',
        }}
        gridTemplateAreas={{
          base: `'logo header' 'sidebar content'`,
        }}
        gap="none"
      >
        <Logo />
        <Header name={name} />
        <Sidebar />
        <Content>{children}</Content>
      </Grid>
    </Box>
  );
};

export default Layout;
