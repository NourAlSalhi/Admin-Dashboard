import type { FC } from "react";
import type { ImageProps as NextImageProps } from "next/image";

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
