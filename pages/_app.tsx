// import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { AppPropsType, NextComponentType } from "next/dist/shared/lib/utils";
import Layout from "../components/Layout";

const clientSideEmotionCache = createEmotionCache();

export type AppPropsWithEmotionCache = AppPropsType & {
  Component: NextComponentType;
  emotionCache?: EmotionCache;
};

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsWithEmotionCache) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
