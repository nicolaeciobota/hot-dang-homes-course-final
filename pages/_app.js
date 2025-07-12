import "../styles/globals.css";
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }) {
  return (
    
    <div className="font-body bg-white dark:bg-slate-900 h-screen">
      <NextNProgress />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
