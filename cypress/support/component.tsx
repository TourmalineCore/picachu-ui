import "./commands";

/// <reference types="cypress" />

import "../../src/styles/index.scss";

import { ReactNode } from "react";
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MountReturn, mount } from "cypress/react18";
import { MountOptions } from 'cypress/react';

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
      mount(
        component: ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps }
      ): Cypress.Chainable<MountReturn>;
    }
  }
}

Cypress.Commands.add(`mount`, (component, options: MountOptions & { routerProps?: MemoryRouterProps } = {}) => {
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
