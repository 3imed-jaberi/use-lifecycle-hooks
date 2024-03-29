# use-lifecycle-hooks

---

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![Build Status][travis-badge]][travis-url] &nbsp;&nbsp;
[![Coverage Status][coveralls-badge]][coveralls-url] &nbsp;&nbsp;
[![NPM version][npm-badge]][npm-url] &nbsp;&nbsp;
[![License][license-badge]][license-url] &nbsp;&nbsp;
![Top Language][top-language-badge] &nbsp;&nbsp;
![Code Size][code-size-badge] &nbsp;&nbsp;
[![Code of Conduct][coc-badge]][coc-url]
[![PRs Welcome][pr-badge]][pr-url] &nbsp;&nbsp;

Use a class-based lifecycle ⚡ under the React Hooks ⚛️🚀 ..

> Thinking in lifecycles terms in hooks is a bad practice. <br/> You can follow this [article][use-effect-guide-dan-abramov-url] for a useEffect guide and how it's bad to mix think.

### `Prerequisites` ⚠️:

In order to use this library, a **React** version **>=16.8.0** is required which introduce **React Hooks** ⚛️⚡ ..

### `Installation`

```bash
# npm ..
$ npm install use-lifecycle-hooks
# yarn ..
$ yarn add use-lifecycle-hooks
```

### `API`

- [`useComponentWillMount`][use-component-will-mount-docs-url] &mdash; same with componentWillMount.
- [`useComponentDidMount`][use-component-did-mount-docs-url] &mdash; same with componentDidMount.
- [`useComponentDidUpdate`][use-component-did-update-docs-url] &mdash; same with componentDidUpdate (pure componentDidUpdate).
- [`useComponentWillUnmount`][use-component-will-unmount-docs-url] &mdash; same with componentWillUnmount.

> **Every lifecycle hook can be used more than one time in the same function, observing the hook rules📏.**

#### Args

| Argument | Type     | Descriptio                                                     | Note                                   |
| -------- | -------- | -------------------------------------------------------------- | -------------------------------------- |
| `funcs`  | Function | callback function only allowed to return void.                 | \***\*\*\*\*\***                       |
| `deps`   | Array    | all props/states values that change them lead to re-rendering. | only in useShuseShouldComponentUpdate. |

#### Undecomented Hooks/HOC

- [`useShouldComponentUpdate`][use-should-component-update-docs-url] &mdash; same with shouldComponentUpdate (and componentDidUpdate with comparison).
- `usePureComponent` &mdash; same as `useShouldComponentUpdate`.
- `withShouldComponentUpdate` &mdash; same as `useShouldComponentUpdate` but follow the hoc pattern.

### `Usage`

This is a practical example of how to use. For more, you can review the [docs][docs-url] dir.

```jsx
import React from 'react';
import { useComponentDidMount } from 'use-lifecycle-hooks';

function yourComponent() {
  // <yourComponent />
  // State ..
  const [state, setState] = React.useState(' Hello World !');

  // ComponentDidMount ..
  useComponentDidMount(() => {
    setState(ComponentDidMountMsg);
  });

  return <h1>{state}</h1>;
}
```

> You can play around with it on this sandbox [codesandbox.io/use-lifecycle-hooks][codesanbox-example] .. or clone the repo and play around with the all examples in the examples folder 👻.

#### License

---

[MIT](LICENSE)

[travis-badge]: https://travis-ci.org/3imed-jaberi/use-lifecycle-hooks.svg?branch=master
[travis-url]: https://travis-ci.org/3imed-jaberi/use-lifecycle-hooks
[coveralls-badge]: https://coveralls.io/repos/github/3imed-jaberi/use-lifecycle-hooks/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/3imed-jaberi/use-lifecycle-hooks?branch=master
[npm-badge]: https://img.shields.io/npm/v/use-lifecycle-hooks.svg?style=flat
[npm-url]: https://www.npmjs.com/package/use-lifecycle-hooks
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: https://github.com/3imed-jaberi/use-lifecycle-hooks/blob/master/LICENSE
[top-language-badge]: https://img.shields.io/github/languages/top/3imed-jaberi/use-lifecycle-hooks
[code-size-badge]: https://img.shields.io/github/languages/code-size/3imed-jaberi/use-lifecycle-hooks
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc-url]: https://github.com/3imed-jaberi/use-lifecycle-hooks/blob/master/CODE_OF_CONDUCT.md
[pr-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[pr-url]: https://github.com/3imed-jaberi/use-lifecycle-hooks/blob/master/CONTRIBUTING.md
[use-effect-guide-dan-abramov-url]: https://overreacted.io/a-complete-guide-to-useeffect
[docs-url]: https://github.com/3imed-jaberi/use-lifecycle-hooks/tree/master/docs
[use-component-will-mount-docs-url]: https://github.com/3imed-jaberi/use-lifecycle-hooks/tree/master/docs/useComponentWillMount.md
[use-component-did-mount-docs-url]: https://github.com/3imed-jaberi/use-lifecycle-hooks/tree/master/docs/useComponentDidMount.md
[use-component-did-update-docs-url]: https://github.com/3imed-jaberi/use-lifecycle-hooks/tree/master/docs/useComponentDidUpdate.md
[use-component-will-unmount-docs-url]: https://github.com/3imed-jaberi/use-lifecycle-hooks/tree/master/docs/useComponentWillUnmount.md
[codesanbox-example]: https://codesandbox.io/s/use-lifecycle-hooks-8wr61
