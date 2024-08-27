import type { FC } from "react";
import type { ImageProps as NextImageProps } from "next/image";
import type { LinkProps as NextLinkProps } from "next/link";

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
