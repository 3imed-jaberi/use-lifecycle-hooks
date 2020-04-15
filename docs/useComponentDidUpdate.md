# `useComponentDidUpdate`

Equivalent to pure componentDidUpdate.


## Usage

Using this library:

```jsx
import React from 'react';
import { useComponentDidUpdate } from 'use-lifecycle-hooks';

function ComponentDidUpdate () {
  // State .. 
  const [state, setState] = React.useState('Hello World !');

  // ComponentDidUpdate .. 
  useComponentDidUpdate(() => {
    setState('Update with useComponentDidUpdate ..');
  });
  
  return <h1>{state}</h1>;
}
```

Same using useEffect:

```jsx
import React from 'react';

function ComponentDidUpdate () {
  // State .. 
  const [state, setState] = React.useState('Hello World !');

  // ComponentDidUpdate Behavior .. 
  React.useEffect(() => {
    setState('Update with useEffect By ComponentDidUpdate Behavior ..');
  });
  
  return <h1>{state}</h1>;
}
```
