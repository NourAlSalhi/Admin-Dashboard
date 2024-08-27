import { SvgType } from "@/components/types";

export const Shortcut: SvgType = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="#58b1e4"
        d="M256 64c0-35.345-28.652-64-63.998-64H64.007a63.8 63.8 0 0 0-45.255 18.743c-24.991 24.995-24.991 65.531 0 90.513l22.792 22.794C17.275 141.147 0 164.554 0 192c0 35.345 28.653 64 63.999 64h128.003a63.8 63.8 0 0 0 45.253-18.745c24.993-24.995 24.993-65.532 0-90.514l-22.792-22.794C238.726 114.853 256 91.443 256 64.001M36.31 219.702a39.17 39.17 0 0 1 26.055-66.826l78.296 78.304H63.996A38.93 38.93 0 0 1 36.31 219.7m183.387-55.393a39.17 39.17 0 0 1-27.695 66.865a39.17 39.17 0 0 1-27.695-11.472L36.31 91.698a39.174 39.174 0 0 1 .104-55.292a39.17 39.17 0 0 1 55.289-.105zm0-72.61a38.9 38.9 0 0 1-26.053 11.43L115.346 24.83h76.664a39.16 39.16 0 0 1 36.178 24.185a39.175 39.175 0 0 1-8.491 42.683"
      />
    </svg>
  );
};

export default Shortcut;
