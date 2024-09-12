import type { FC } from "react";
import type { ImageProps as NextImageProps } from "next/image";
import { UseFormRegister, FieldErrors ,UseFormSetValue} from "react-hook-form";

export interface LogoProps extends Omit<NextImageProps, "src" | "alt"> {
  src?: string;
  alt?: string;
}
export type LogoType = FC<LogoProps>;

export type ImageType = FC<NextImageProps>;

export interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export type SvgType = FC<SvgProps>;
export interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
}
export interface SuggestionItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  shortcut?: string;
}

export interface CardItemProps {
  label: string;
  icon: React.ReactNode;
  count: number;
}

export interface BackButtonProps {
  href?: string;
  title?: string;
}

export interface TextInputProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<any>;
  maxLength?: number;
  type?: string;
}

export interface TextAreaInputProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<any>;
  maxLength?: number;
}

export interface DateInputProps {
  label: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<any>;
  setValue: UseFormSetValue<any>;
  control: any;
}