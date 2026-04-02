import { SvgIcon, type SvgIconProps } from "@/components/svg-icon/svg-icon";

const SvgIconX = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path d="M14.4,15.3c-0.2,0-0.4-0.1-0.6-0.3L10,11.2L6.2,15c-0.3,0.3-0.9,0.3-1.2,0s-0.3-0.9,0-1.2L8.8,10L5,6.2C4.6,5.9,4.6,5.3,5,5s0.9-0.3,1.2,0L10,8.8L13.8,5c0.3-0.3,0.9-0.3,1.2,0c0.3,0.3,0.3,0.9,0,1.2L11.2,10l3.8,3.8c0.3,0.3,0.3,0.9,0,1.2C14.9,15.2,14.6,15.3,14.4,15.3z" />
    </SvgIcon>
  );
};

export { SvgIconX };
