import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Head from 'next/head'

import CoinTableContainer from '../src/containers/CoinTableContainer';
import AppNav from '../src/AppNav';
import ModalProvider from '../src/ModalProvider';
import configureStore from '../src/configureStore';
import Api from '../src/Api';
import { initResourceAction } from '../src/actions/resourceActions';

class Index extends PureComponent {
    static async getInitialProps ({ req }) {
        if (req) {
            const { data } = await Api.get('transactions')
            return { data };
        }
        return null;
    }
    componentWillMount() {
        this.store = configureStore();
        this.store.dispatch(initResourceAction(this.props.data));
    }
    render() {
        return (
            <div>
                <Head>
                    <title>글로벌 소프트웨어 3강</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css" />
                </Head>
                <Provider store={this.store}>
                    <ModalProvider>
                    <div className="App">
                        <AppNav />
                        <CoinTableContainer />
                    </div>
                    </ModalProvider>
                </Provider>
            </div>
        );
    }
}

export default Index;
