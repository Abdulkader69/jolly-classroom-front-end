import '../src/assets/styles//globals.css';
import type { AppProps } from 'next/app';
import Header from '../src/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="page-container pt-[70px] bg-LightGray h-full">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
