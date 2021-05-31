/// <reference types="react-dom/experimental" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Callable {
  (...args: any[]): any

}

export const replaceHydrateFunction = () => {
  return (element: React.ReactElement, container: Element, callback: Callable) => {
    ('createRoot' in ReactDOM
     // @ts-ignore
      ? ReactDOM.createRoot
      : ReactDOM.unstable_createRoot
    )(container, {
      hydrate: true,
      hydrationOptions: { onHydrated: callback },
    }).render(element);
  };
};
