import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";

import theme from "../styles/themes";
import { Layout } from "../layout/Layout";
export default function App({ Component, pageProps }) {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
}
