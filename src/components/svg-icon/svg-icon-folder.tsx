import { SvgIcon, type SvgIconProps } from "@/components/svg-icon/svg-icon";

const SvgIconFolder = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path d="M15,17.1H5c-2.2,0-4-1.8-4-4v-4C1,9,1,9,1,8.9c0-0.1,0-0.2,0-0.2V6.9c0-2.2,1.8-4,4-4h3.8c1.5,0,2.9,0.9,3.6,2.3H15c2.2,0,4,1.8,4,4v4C19,15.3,17.2,17.1,15,17.1z M5,4.6c-1.2,0-2.2,1-2.2,2.2v1.8c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2v4c0,1.2,1,2.2,2.2,2.2h10c1.2,0,2.2-1,2.2-2.2v-4c0-1.2-1-2.2-2.2-2.2h-3.3c-0.4,0-0.7-0.3-0.8-0.6c-0.3-1-1.2-1.6-2.2-1.6H5z" />
    </SvgIcon>
  );
};

export { SvgIconFolder };
