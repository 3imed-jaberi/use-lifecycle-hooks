# `useComponentDidMount`

Equivalent to componentDidMount.


## Usage

Using this library:

```jsx
import React from 'react';
import { useComponentDidMount } from 'use-lifecycle-hooks';

function ComponentDidMount () {
  // State .. 
  const [state, setState] = React.useState('Hello World !');

  // ComponentDidMount .. 
  useComponentDidMount(() => {
    setState('Update with useComponentDidMount ..');
  });

  return <h1>{state}</h1>;
}
```

Same using useEffect:

```jsx
import React from 'react';

function ComponentDidMount () {
  // State .. 
  const [state, setState] = React.useState('Hello World !');

  // ComponentDidMount Behavior .. 
  React.useEffect(() => {
    setState('Update with useEffect with ComponentDidMount Behavior ..');
  }, []);

  return <h1>{state}</h1>;
}
```
