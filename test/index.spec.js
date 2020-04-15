import React from 'react';
import { act } from 'react-dom/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { useComponentDidMount } from '../build';


configure({ adapter: new Adapter() });



const ComponentDidMount = () => {
  // State .. 
  const [state, setState] = React.useState(' Hello World !');

  // ComponentDidMount .. 
  useComponentDidMount(() => {
    setState('ComponentDidMount ..');
  });

  return <h1>{state}</h1>;
}


describe('My Package ....', () => {
  test('useComponentDidMount', () => {
    let component;

    act(() => {
      component = mount(<ComponentDidMount />);
    });

    expect(component.text()).toBe('ComponentDidMount ..');
  });
});