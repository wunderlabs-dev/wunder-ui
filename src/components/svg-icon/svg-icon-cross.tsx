import { SvgIcon, type SvgIconProps } from "@/components/svg-icon/svg-icon";

const SvgIconCross = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </SvgIcon>
  );
};

export { SvgIconCross };
