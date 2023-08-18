import "../styles/globals.css";
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }) {
  return (
    
    <div className="font-body">
      <NextNProgress />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
