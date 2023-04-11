import { SelectorContext } from '../types/page-factory/component';

export const selectorTemplateFormat = (locator: string, { ...context }: SelectorContext): string => {
  let template = locator;
  for (const [key, value] of Object.entries(context)) {
    template = template.replace(`{${key}}`, value.toString());
  }

  return template;
};
