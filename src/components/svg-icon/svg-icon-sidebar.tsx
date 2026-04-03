import { SvgIcon, type SvgIconProps } from "@/components/svg-icon/svg-icon";

const SvgIconSidebar = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path d="M16.2,17.1H3.8c-1.2,0-2.1-1.1-2.1-2.4V5.3c0-1.3,1-2.4,2.1-2.4h12.5c1.2,0,2.1,1.1,2.1,2.4v9.4C18.4,16,17.4,17.1,16.2,17.1z M7.8,15.4h8.5c0.1,0,0.4-0.3,0.4-0.7V5.3c0-0.4-0.2-0.7-0.4-0.7H7.8V15.4z M3.8,4.6c-0.1,0-0.4,0.3-0.4,0.7v9.4c0,0.4,0.2,0.7,0.4,0.7H6V4.6H3.8z" />
    </SvgIcon>
  );
};

export { SvgIconSidebar };
