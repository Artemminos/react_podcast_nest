import React from 'react';
import App, {AppContext} from 'next/app';
import {wrapper} from "@/store/index";
import '@/styles/style.scss';
import Head from "next/head";

class MyApp extends App {
    static async getServer({Component, ctx}: AppContext) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render() {
        const {Component, pageProps} = this.props;
        return <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>my app</title>
            </Head>
            <Component {...pageProps} />
        </>;
    }
}

export default wrapper.withRedux(MyApp);
