import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { LoadingContext, LoadingProvider } from "@/contexts/LoadingContext";
import "@/styles/globals.css";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <Loading />
      <ToastContainer 
        position="bottom-right"
        theme="dark"
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </LoadingProvider>
  );
}
