import React, { Fragment } from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head';
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import createStore from '../store'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx })
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Fragment>
                <Head>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <meta charSet='utf-8' />
                    <title>开发者专区 | Fashop开放社区</title>
                    <link rel='shortcut icon' href='/static/favicon.png' type='image/png' />
                    <style jsx global>{`
                        * {
                            margin: 0;
                            padding: 0;
                        }
                        body {
                            font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
                        }
                    `}</style>
                </Head>
                <Container>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </Container>
            </Fragment>
        )
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
