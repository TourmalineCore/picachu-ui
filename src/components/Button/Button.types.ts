import { ButtonHTMLAttributes } from "react";

export enum ThemeButton {
  BRIGHT = `bright`,
  LIGHT = `light`,
  SMALL = `small`,
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
