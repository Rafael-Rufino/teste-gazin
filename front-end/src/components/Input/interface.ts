import { ChangeEvent } from "react";
export interface IInputProps {
  id?: string;
  type?: "text" | "number" | "date";
  value?: string | number | Date | any;
  label?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
