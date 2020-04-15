# `useShouldComponentUpdate`

Equivalent to shouldComponentUpdate and componentDidUpdate with comparison.


## Usage

Using this library:

```jsx
import React from 'react';
import { useShouldComponentUpdate } from 'use-lifecycle-hooks';

function ShouldComponentUpdate ({ content }) {
  // State .. 
  const [state, setState] = React.useState('Hello World !');

  // ShouldComponentUpdate .. 
  useShouldComponentUpdate(() => { // componnent update when content is change .. 
    setState('Update with useShouldComponentUpdate ..');
  }, [content]);
  
  return <h1>{state}</h1>;
}
```

Same using useEffect:

```jsx
import React from 'react';

function ShouldComponentUpdate ({ content }) {
  // State .. 
  const [state, setState] = React.useState('Hello World !');

  // ShouldComponentUpdate .. 
  React.useEffect(() => { // componnent update when content is change .. 
    setState('Update with useEffect By ShouldComponentUpdate Behavior ..');
  }, [content]);
  
  return <h1>{state}</h1>;
}
```
