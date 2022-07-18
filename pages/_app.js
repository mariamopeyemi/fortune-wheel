import '../styles/globals.css';
import '../styles/typography.css';
import '../styles/icon-fonts.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterMoment';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../utils/theme';
import { Provider } from 'react-redux';
import store from '../store';

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <>
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {Component.Layout && (
                <Component.Layout>
                  <Component {...pageProps}></Component>
                </Component.Layout>
              )}
              {!Component.Layout && <Component {...pageProps}></Component>}
            </ThemeProvider>
          </LocalizationProvider>
        </CacheProvider>
      </Provider>
    </>
  );
}

export default MyApp;
