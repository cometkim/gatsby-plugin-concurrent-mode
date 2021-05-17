/// <reference types="react-dom/experimental" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Callable {
  (...args: any[]): any

}

export const replaceHydrateFunction = () => {
  return (element: React.ReactElement, container: Element, callback: Callable) => {
    ReactDOM.unstable_createRoot(container, {
      hydrate: true,
      hydrationOptions: { onHydrated: callback },
    }).render(element);
  };
};
