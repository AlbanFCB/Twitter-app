import Layout from "../components/Layout";
import LoginModal from "../components/modals/LoginModal";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import RegisterModal from './../components/modals/RegisterModal';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster/>
      <RegisterModal/>
      <LoginModal/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
