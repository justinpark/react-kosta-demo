import React from 'react';
import ReactDOM from 'react-dom'

import { shallow, render } from 'enzyme'; 
import LoadingProvider, { LoadingConsumer } from '../LoadingProvider';
import { expect } from 'chai';
import sinon from 'sinon';

const MyComponent = () => null;
const MyApp = (props) => (
  <LoadingProvider {...props}>
    <div>
      <LoadingConsumer>
        {isLoading => <MyComponent isLoading={isLoading}/>}
      </LoadingConsumer>
    </div>
  </LoadingProvider>
);
const getWrapper = props => shallow(<MyComponent {...props}/>);

describe('<LoadingProvider>', () => {
  xit('renders okay', () => {
    expect(() => {
      getWrapper();
    }).not.to.throw();
  });

  it('propagates loading value to the consumer component', () => {
    const wrapper = render(<MyApp loading />);
    expect(wrapper.html()).to.eq('asdf');
    // console.log(wrapper.find(LoadingProvider));
    // expect(wrapper.find(LoadingConsumer).prop('children')().prop('isLoading')).to.eq(true);
  });
});
