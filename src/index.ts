import { useEffect } from 'react';

// #######################################################################
// ################################ Notes ################################
// #######################################################################

// Mounting:
//   – Birth of your component.
//   – Behavior before the component is added to the DOM.
// Update:
//   – Growth of your component.
//   – Behavior when the component re-render beacause any chhnage occurs.
// Unmount:
//   – Death of your component.
//   – Behavior right before the component is removed from the DOM.

// #######################################################################
// ################################ Types ################################
// #######################################################################

type CallbackFunc = () => void | undefined;
type DependencyList = ReadonlyArray<unknown>; // eslint-disable-line no-undef

// #######################################################################
// ################################ Code #################################
// #######################################################################

/**
 * Called immediately before mounting occurs ( before render the component).
 * Avoid introducing any side-effects or subscriptions in this method.
 * Please, see our docs dir for this hook. Be Careful.
 *
 * @param func callback function only allowed to return void.
 */
function useComponentWillMount(func: CallbackFunc): void {
  func();
}

/**
 * Called immediately after a component is mounted.
 * Setting state here will trigger re-rendering.
 *
 * @param func callback function only allowed to return void.
 */
function useComponentDidMount(func: CallbackFunc): void {
  useEffect(func, []);
}

/**
 * Called immediately after updating occurs.
 * Note : Called for the initial render.
 *
 * @param func callback function only allowed to return void.
 */
function useComponentDidUpdate(func: CallbackFunc): void {
  useEffect(func);
}

/**
 * Called immediately after change in deps occurs.
 * Should trigger a re-render.
 *
 * @param func callback function only allowed to return void.
 * @param deps all props/states values  that change them lead to re-rendering.
 */
function useShouldComponentUpdate(func: CallbackFunc, deps: DependencyList): void {
  useEffect(func, [deps]);
}

/**
 * Called immediately before a component is destroyed.
 * Perform any necessary cleanup in this method, such
 * as cancelled network requests, or cleaning up any
 * DOM elements created in `useComponentDidMount`.
 *
 * @param func callback function only allowed to return void.
 */
function useComponentWillUnmount(func: CallbackFunc): void {
  useEffect(() => {
    return () => {
      func();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

// ########################################################################
// ################################ Export ################################
// ########################################################################

export {
  useComponentWillMount,
  useComponentDidMount,
  useComponentDidUpdate,
  useShouldComponentUpdate,
  useComponentWillUnmount
};
