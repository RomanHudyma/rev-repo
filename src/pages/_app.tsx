/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { wrapper } from '@store/.';

const App = ({ Component, ...pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;
