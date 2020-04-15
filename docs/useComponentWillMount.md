# `useComponentWillMount`

Equivalent to componentWillMount.


## Usage

Using this library:

```jsx
import React from 'react';
import { useComponentWillMount } from 'use-lifecycle-hooks';

function ComponentWillMount () {
  // State .. 
  const [state] = React.useState('Hello World !');

  // ComponentWillMount .. 
  useComponentWillMount(() => {
    setState('Update with useComponentWillMount ..');
  });

  return <h1>{state}</h1>;
}

```

Same using useEffect (here we don't use useEffect):

```jsx
import React from 'react';

function ComponentWillMount () {
  // State .. 
  const [state] = React.useState('Hello World !');

  // ComponentWillMount Behavior .. 
  setState('Update with ComponentWillMount Behavior ..');

  return <h1>{state}</h1>;
}
```