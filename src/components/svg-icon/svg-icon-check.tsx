import { SvgIcon, type SvgIconProps } from "@/components/svg-icon/svg-icon";

const SvgIconCheck = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export { SvgIconCheck };
