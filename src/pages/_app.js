import GlobalStyle from "../styles/global";
import { Layout } from "../layout/Layout";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </>
  );
}
