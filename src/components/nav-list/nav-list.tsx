import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/helpers/utils";

import { Typography } from "@/components/typography";

type NavListProps = ComponentProps<"nav">;

const NavList = ({ className, ...props }: NavListProps) => {
  return <nav data-slot="nav-list" className={cn("flex flex-col gap-2", className)} {...props} />;
};

type NavListGroupProps = ComponentProps<"div">;

const NavListGroup = ({ className, ...props }: NavListGroupProps) => {
  return (
    <div
      data-slot="nav-list-group"
      className={cn("flex flex-col gap-2 px-3", className)}
      {...props}
    />
  );
};

type NavListGroupTitleProps = ComponentProps<"div"> & {
  icon?: ReactNode;
};

const NavListGroupTitle = ({ icon, className, children, ...props }: NavListGroupTitleProps) => {
  return (
    <div
      data-slot="nav-list-group-title"
      className={cn("flex items-center gap-2 rounded py-1", className)}
      {...props}
    >
      {icon ? <span className="shrink-0 text-gray-50 [&_svg]:size-5">{icon}</span> : null}
      <Typography as="span" variant="h2" weight="semibold">
        {children}
      </Typography>
    </div>
  );
};

type NavListGroupItemsProps = ComponentProps<"div">;

const NavListGroupItems = ({ className, ...props }: NavListGroupItemsProps) => {
  return (
    <div
      data-slot="nav-list-group-items"
      className={cn("ml-2 flex flex-col gap-2 border-l border-gray-100/30 pl-2", className)}
      {...props}
    />
  );
};

type NavListItemProps = ComponentProps<"div"> & {
  action?: ReactNode;
  active?: boolean;
};

const NavListItem = ({ action, active, className, children, ...props }: NavListItemProps) => {
  return (
    <div
      data-slot="nav-list-item"
      className={cn(
        "relative flex w-full items-center justify-between rounded px-3 py-1",
        "cursor-pointer transition-all duration-150",
        "hover:bg-gray-900",
        active && "bg-gray-800 shadow-card-inset",
        className,
      )}
      {...props}
    >
      <Typography as="span" variant="body2">
        {children}
      </Typography>
      {action ? <span className="shrink-0">{action}</span> : null}
    </div>
  );
};

export { NavList, NavListGroup, NavListGroupTitle, NavListGroupItems, NavListItem };
export type {
  NavListProps,
  NavListGroupProps,
  NavListGroupTitleProps,
  NavListGroupItemsProps,
  NavListItemProps,
};
