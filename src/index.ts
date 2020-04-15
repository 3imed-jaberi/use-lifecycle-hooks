import { useEffect } from 'react';


function useComponentDidMount(func: () => void): void {
  useEffect(func, []);
}


export { useComponentDidMount };
