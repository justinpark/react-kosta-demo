import React from 'react';

import { shallow, render } from 'enzyme'; 
import Input from '../Input';
import { expect } from 'chai';
import sinon from 'sinon';

describe('<Input>', () => {
  it('renders okay', () => {
    expect(() => {
      render(<Input />);
    }).not.to.throw();
  });

  it('renders input field', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input')).to.have.lengthOf(1);
  });

  it('passes value prop', () => {
    const value = 'my random value';
    const wrapper = shallow(<Input value={value} />);
    const { value: actualValue } = wrapper.find('input').props();
    expect(actualValue).to.eq(value);
  });

  it('triggers onChange', () => {
    const value = 'my random value';
    const stub = sinon.stub();
    const wrapper = shallow(<Input value={value} onChange={stub} />);
    wrapper.find('input').simulate('change', { target: { value } });
    expect(stub.callCount).to.eq(1);
  });

  it('triggers onBlur', () => {
    const value = 'my random value';
    const stub = sinon.stub();
    const wrapper = shallow(<Input value={value} onBlur={stub} />);
    expect(stub.callCount).to.eq(0);
    wrapper.find('input').simulate('blur', { target: { value } });
    expect(stub.callCount).to.eq(1);
  });
});
