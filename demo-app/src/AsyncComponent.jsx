import React, { PureComponent } from 'react';
import withLoading from './withLoading';

const Placeholder = () => <div></div>;
const Loader = withLoading(false)(Placeholder);

export default class AsyncComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Component: null,
    };
  }

  componentDidMount() {
    const { loader } = this.props;

    if (this.state.Component) {
      return;
    }

    this.promise = loader();
    this.promise.then((Component) => {
      this.setState({ Component });
    });
  }

  render() {
    const { loader, ...otherProps } = this.props;
    const { Component } = this.state;
    if (Component) {
      return <Component {...otherProps} />;
    }

    return (
      <Loader isLoading/>
    );
  }
}
