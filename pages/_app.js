import { IndumentariaProvider } from "../context/IndumentariaProvider";
import '../styles/globals.css';
import '../public/css/spinner.css';

function MyApp({ Component, pageProps }) {
  return (
    <IndumentariaProvider>
      <Component {...pageProps} />
    </IndumentariaProvider>
  );
}

export default MyApp;
