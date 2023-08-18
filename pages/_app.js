import { Suspense } from "react";
import "../styles/globals.css";
import {Loading} from "./Loading";
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }) {
  return (
    
    <div className="font-body">
      <NextNProgress />
      <Suspense fallback={<Loading />}><Component {...pageProps} /></Suspense>
    </div>
  );
}

export default MyApp;
