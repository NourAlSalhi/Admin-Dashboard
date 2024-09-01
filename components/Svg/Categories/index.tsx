import type { SvgType } from "@/components/types";

export const Categories: SvgType = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M228 56h-68l-26.67-20a20.12 20.12 0 0 0-12-4H76a20 20 0 0 0-20 20v20H36a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h152.89A19.13 19.13 0 0 0 208 204.89V184h20.89A19.13 19.13 0 0 0 248 164.89V76a20 20 0 0 0-20-20m-44 144H40V96h40l28.8 21.6a12 12 0 0 0 7.2 2.4h68Zm40-40h-16v-44a20 20 0 0 0-20-20h-68L93.33 76a20.12 20.12 0 0 0-12-4H80V56h40l28.8 21.6A12 12 0 0 0 156 80h68Z"
      />
    </svg>
  );
};

export default Categories;
