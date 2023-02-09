/* eslint-disable react/jsx-props-no-spreading */
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { wrapper } from '@store/.';
import { cleanUpDB } from '@utils/indexedDB/queries';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = ({ Component, ...pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  useEffect(() => {
    cleanUpDB();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Component {...props.pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
