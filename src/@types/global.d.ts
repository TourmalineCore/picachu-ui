interface Itest extends Cypress.Chainable<undefined> { }

declare module '*.svg' {

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare const cyc: Itest;
