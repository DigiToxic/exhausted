import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../contexts/ThemeContext';
import withTransition from './components/withTransition';

function MyApp({ Component, pageProps }: AppProps) {
  const WrappedComponent = withTransition(Component);
  return (
    <ThemeProvider>
      <WrappedComponent {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;