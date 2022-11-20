import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isLoggedIn = Cookies.get("isLoggedIn") === "true";
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
