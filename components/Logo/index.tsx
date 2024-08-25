import Image from "../Image";
import type { LogoType } from "../types";

export const Logo: LogoType = ({
  src = "/images/logo.png",
  alt = "Admin Dashboard Logo",
  ...rest
}) => {
  return (
    <Image priority alt={alt} src={src} width={39} height={39} {...rest} />
  );
};

export default Logo;
