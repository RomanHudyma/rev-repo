import type { AppProps } from 'next/app';

import { wrapper } from '@store/.';

const App = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default wrapper.withRedux(App);
