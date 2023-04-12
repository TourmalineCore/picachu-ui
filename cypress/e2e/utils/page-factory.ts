import { SelectorContext } from '../types/page-factory/component';

export const selectorTemplateFormat = (selector: string, { ...context }: SelectorContext): string => {
  let template = selector;
  for (const [key, value] of Object.entries(context)) {
    template = template.replace(`{${key}}`, value.toString());
  }

  return template;
};
