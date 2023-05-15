export type SelectorContext = { [key: string]: string | boolean | number };

export type ComponentProps = {
  name: string;
  selector: string;
};

export type Selector = { selector?: string } & SelectorContext;
