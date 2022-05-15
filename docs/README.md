# Docs 📘

---

Use a class-based lifecycle ⚡ under the React Hooks ⚛️ (helpful for newcomers) 🚀 ..

> Thinking in lifecycles terms in hooks is a bad practice. You can follow this [article][use-effect-guide-dan-abramov-url] for a useEffect guide and how it's bad to mix think.

- [`useComponentWillMount`][use-component-will-mount-docs-url] &mdash; same with componentWillMount.
- [`useComponentDidMount`][use-component-did-mount-docs-url] &mdash; same with componentDidMount.
- [`useComponentDidUpdate`][use-component-did-update-docs-url] &mdash; same with componentDidUpdate (pure componentDidUpdate).
- [`useComponentWillUnmount`][use-component-will-unmount-docs-url] &mdash; same with componentWillUnmount.

> **Every lifecycle hook can be used more than one time in the same function, observing the hook rules📏.**

### `Args`

| Argument | Type     | Descriptio                                                     | Note                                   |
| -------- | -------- | -------------------------------------------------------------- | -------------------------------------- |
| `funcs`  | Function | callback function only allowed to return void.                 | \***\*\*\*\*\***                       |
| `deps`   | Array    | all props/states values that change them lead to re-rendering. | only in useShuseShouldComponentUpdate. |

> You can play around with it on this sandbox [codesandbox.io/use-lifecycle-hooks][codesanbox-example] 👻..

#### License

---

[MIT][license-url]

[use-effect-guide-dan-abramov-url]: https://overreacted.io/a-complete-guide-to-useeffect
[use-component-will-mount-docs-url]: ./useComponentWillMount.md
[use-component-did-mount-docs-url]: ./useComponentDidMount.md
[use-component-did-update-docs-url]: ./useComponentDidUpdate.md
[use-component-will-unmount-docs-url]: ./useComponentWillUnmount.md
[codesanbox-example]: https://codesandbox.io/s/use-lifecycle-hooks-8wr61
[license-url]: ../LICENSE
