# `ComponentWillUnmount`

Equivalent to componentWillUnmount.


## Usage

Using this library:

```jsx
import React from 'react';
import { useComponentWillUnmount } from 'use-lifecycle-hooks';

function ComponentWillUnmount () {
  // State .. 
  const [state] = React.useState('Hello World !');

  // ComponentWillUnmount .. 
  useComponentWillUnmount(() => {
    // Really, should you do something more logical.
    console.log('Unmounting ...');
  });
  
  return <h1>{state}</h1>;
}

```

Same using useEffect (here we don't use useEffect):

```jsx
import React from 'react';

function ComponentWillUnmount () {
  // State .. 
  const [state] = React.useState('Hello World !');

  // ComponentWillUnmount .. 
  React.useEffect(() => {

    return () => {
      console.log('Unmounting ...');
    }
  }, []);
  
  return <h1>{state}</h1>;
}
```