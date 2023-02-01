import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import React from 'react';

import Copyright from '@components/common/Copyright';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <CssBaseline />
    <Container
      component="main"
      maxWidth="xl"
      sx={{
        minHeight: 'calc(100vh - 52px)',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    >
      {children}
    </Container>
    <footer>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          backgroundColor: 'secondary.main',
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Copyright />
          </Grid>
        </Container>
      </Box>
    </footer>
  </>
);

export default Layout;
