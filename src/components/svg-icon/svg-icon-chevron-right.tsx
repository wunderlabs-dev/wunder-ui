import { SvgIcon, type SvgIconProps } from "@/components/svg-icon/svg-icon";

const SvgIconChevronRight = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path d="M7.7,15.3c-0.2,0-0.4-0.1-0.6-0.3c-0.3-0.3-0.3-0.9,0-1.2L11.4,10L7.1,6.2c-0.3-0.3-0.3-0.9,0-1.2c0.3-0.3,0.9-0.3,1.2,0l5,4.4c0.2,0.2,0.3,0.4,0.3,0.6s-0.1,0.5-0.3,0.6l-5,4.4C8.1,15.2,7.9,15.3,7.7,15.3z" />
    </SvgIcon>
  );
};

export { SvgIconChevronRight };
