import { useEffect } from 'react';
import { IndumentariaProvider } from '../context/IndumentariaProvider';
import '../styles/globals.css';
import '../public/css/spinner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <IndumentariaProvider>
      <Component {...pageProps} />
    </IndumentariaProvider>
  );
}

export default MyApp;
