import { InputHTMLAttributes, ChangeEvent } from "react";
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type?: string;
  value?: string;
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
