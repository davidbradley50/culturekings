import React, { Fragment } from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import ReactGA from 'react-ga';
import { includes } from 'ramda';
import GlobalStyles from '@app/components/global-styles';
import theme from '@app/components/theme';

ReactGA.initialize(process.env.GA_CODE, {
  debug: includes(process.env.APP_ENV, ['local']),
});

const locationPath = () => window.location.pathname + window.location.search;
const registerPageview = () => {
  if (typeof window !== 'undefined') {
    ReactGA.pageview(locationPath());
  }
};

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeError', () => NProgress.done());
Router.events.on('routeChangeComplete', () => {
  registerPageview();
  NProgress.done();
});

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  }

  componentDidMount() {
    registerPageview();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Culture Kings</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyles />
            <Component {...pageProps} />
          </Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}
