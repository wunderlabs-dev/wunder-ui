import { SvgIcon, type SvgIconProps } from "@/components/svg-icon/svg-icon";

const SvgIconPlay = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path d="M6.2,17.1c-0.3,0-0.7-0.1-1-0.2c-0.7-0.4-1.1-1.1-1.1-1.8V5c0-0.8,0.4-1.5,1.1-1.8c0.7-0.4,1.5-0.3,2.2,0.1l7.6,5c0.6,0.4,0.9,1,0.9,1.7c0,0.7-0.3,1.3-0.9,1.7l-7.6,5C7,17,6.6,17.1,6.2,17.1z M6.2,4.6c-0.1,0-0.1,0-0.2,0C6,4.7,5.9,4.8,5.9,5V15c0,0.2,0.1,0.3,0.2,0.3c0.1,0,0.2,0.1,0.4,0l7.6-5c0.1-0.1,0.1-0.2,0.1-0.3s0-0.2-0.1-0.3l0,0l-7.6-5C6.3,4.6,6.3,4.6,6.2,4.6z" />
    </SvgIcon>
  );
};

export { SvgIconPlay };
