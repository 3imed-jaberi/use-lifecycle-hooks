import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
  useComponentWillMount,
  useComponentDidMount,
  useComponentDidUpdate,
  useShouldComponentUpdate,
  useComponentWillUnmount
} from '../build';


// #######################################################################
// #################### Config. Enzyme with React 16 #####################
// #######################################################################

Enzyme.configure({ adapter: new Adapter() });


// #######################################################################
// ########################## Global Variables ###########################
// #######################################################################

var UnMounting, WillMounting;

const ComponentWillMountMsg = 'ComponentWillMount ..',
  ComponentDidMountMsg = 'ComponentDidMount ..',
  ComponentDidUpdateMsg = 'ComponentDidUpdate ..',
  ShouldComponentUpdateMsg = 'ShouldComponentUpdate ..',
  ComponentWillUnmountMsg = 'ComponentWillUnmount ..';


// #######################################################################
// ########################## Mocks Components ###########################
// #######################################################################

function ComponentWillMount() {
  // State .. 
  const [state] = React.useState(' Hello World !');

  // ComponentWillMount .. 
  useComponentWillMount(() => {
    WillMounting = ComponentWillMountMsg;
  });

  return <h1>{state}</h1>;
}

//**********************************************

function ComponentDidMount() {
  // State .. 
  const [state, setState] = React.useState(' Hello World !');

  // ComponentDidMount .. 
  useComponentDidMount(() => {
    setState(ComponentDidMountMsg);
  });

  return <h1>{state}</h1>;
}

//**********************************************

function ComponentDidUpdate() {
  // State .. 
  const [state, setState] = React.useState(' Hello World !');

  useComponentDidMount(() => {
    setState('just to trigger the did update!');
  });

  // ComponentDidUpdate .. 
  useComponentDidUpdate(() => {
    setState(ComponentDidUpdateMsg);
  });



  return <h1>{state}</h1>;
}

//**********************************************

function ComponentWillUnmount() {
  // State .. 
  const [state] = React.useState('Hello World !');

  // ComponentWillUnmount .. 
  useComponentWillUnmount(() => {
    // UnMounting here is global var .. 
    UnMounting = ComponentWillUnmountMsg;
  });

  return <h1>{state}</h1>;
}


// #######################################################################
// ############################# Test Code ###############################
// #######################################################################

describe('use-lifecycle-hooks', () => {

  test('useComponentWillMount', () => {
    act(() => {
      mount(<ComponentWillMount />);
    });

    expect(WillMounting).toBe(ComponentWillMountMsg);
  });

  test('useComponentDidMount', () => {
    let component;

    act(() => {
      component = mount(<ComponentDidMount />);
    });

    expect(component.text()).toBe(ComponentDidMountMsg);
  });

  test('useComponentDidUpdate', () => {
    let component;

    act(() => {
      component = mount(<ComponentDidUpdate />);
      component.update();
    });

    expect(component.text()).toBe(ComponentDidUpdateMsg);
  });

  test('useComponentWillUnmount', () => {
    let component;

    act(() => {
      component = mount(<ComponentWillUnmount />);
      component.unmount();
    });

    expect(UnMounting).toBe(ComponentWillUnmountMsg);
  });
});