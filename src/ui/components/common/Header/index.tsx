import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '@store/index';
import { pushNotification } from '@utils/indexedDB/queries';

const Header: FC = () => {
  const user = useSelector((state: AppState) => state.auth);

  const handlePushNotification = () => {
    pushNotification('warning', 'NOTIFICATION TEXT');
  };

  return (
    <header>
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
            justifyContent="space-between"
          >
            <Grid item>
              <Typography component="h2">App Title</Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={handlePushNotification}
                variant="contained"
                color="info"
              >
                Push Notification
              </Button>
            </Grid>
            <Grid item>
              {user.token ? (
                <Typography component="h2">{user.email}</Typography>
              ) : (
                <Button href="/sign-up" variant="contained">
                  Sign Up
                </Button>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
