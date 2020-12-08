import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { Provider as ReceitaProvider } from "../context/receitaContext";
import theme from "../styles/themes";
import { Layout } from "../layout/Layout";
export default function App({ Component, pageProps }) {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <ReceitaProvider>
        <Layout>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </ReceitaProvider>
    </ThemeProvider>
  );
}
