import "./commands";

/// <reference types="cypress" />

import { MountReturn, mount } from "cypress/react18";
import "../../src/styles/index.scss";

import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MountOptions } from 'cypress/react';
import { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mount(
        component: React.ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps }
      ): Cypress.Chainable<MountReturn>;
    }
  }
}

Cypress.Commands.add(`mount`, (component: ReactNode, options: MountOptions & { routerProps?: MemoryRouterProps } = {}) => {
  const {
    routerProps = {
      initialEntries: [`/`],
    },
    ...mountOptions
  } = options;

  const wrapped = (
    <MemoryRouter {...routerProps}>
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    </MemoryRouter>
  );

  return mount(wrapped, mountOptions);
});
