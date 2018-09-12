import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'react-redux';

import AppNav from '../src/AppNav';
import ModalProvider from '../src/ModalProvider';
import FilterContainer from '../src/containers/FilterContainer';
import CoinTableContainer from '../src/containers/CoinTableContainer';
import ToastContainer from '../src/containers/ToastContainer';
import configureStore from '../src/configureStore';
import Api from '../src/Api';
import { init } from '../src/actions/coinActions';

class Index extends PureComponent {
    static async getInitialProps ({ req }) {
        if (req) {
            const { data } = await Api.get('coins');
            return { data };
        }
        return null;
    }
    componentWillMount() {
        this.store = configureStore();
        this.store.dispatch(init(this.props.data));
    }
    render() {
        return (
            <Provider store={this.store}>
                <ModalProvider>
                    <div className="App">
                        <Head>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css" />
                        </Head>
                        <AppNav />
                        <FilterContainer />
                        <CoinTableContainer />
                        <ToastContainer />
                    </div>
                </ModalProvider>
            </Provider>
            
        );
    }
}

Index.propTypes = {

};

export default Index;
