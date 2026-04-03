import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/helpers/utils";

import { SvgIconX } from "@/components/svg-icon/svg-icon-x";

import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { Typography } from "@/components/typography";

type CalloutProps = ComponentProps<"div"> & {
  icon?: ReactNode;
  title: ReactNode;
  onClose?: () => void;
};

type CalloutBodyProps = ComponentProps<"div">;
type CalloutActionProps = ComponentProps<"a">;

const Callout = ({ icon, title, onClose, className, children, ...props }: CalloutProps) => {
  return (
    <Card variant="solid" spacing="md" rounded="md" className={className}>
      <CardContent {...props}>
        <div className="flex items-center justify-between text-gray-50">
          <Typography as="span" variant="h2" weight="semibold">
            {icon ? <span className="[&_svg]:size-4">{icon}</span> : null}
            {title}
          </Typography>
          {onClose ? (
            <Button variant="ghost" aria-label="Dismiss" onClick={onClose}>
              <SvgIconX size="sm" />
            </Button>
          ) : null}
        </div>
        {children}
      </CardContent>
    </Card>
  );
};

const CalloutBody = ({ className, children, ...props }: CalloutBodyProps) => {
  return (
    <div
      data-slot="callout-body"
      className={cn("ml-2 border-l border-gray-100/30 pl-2", className)}
      {...props}
    >
      <Typography variant="body2">{children}</Typography>
    </div>
  );
};

const CalloutAction = ({ className, children, ...props }: CalloutActionProps) => {
  return (
    <a data-slot="callout-action" className={cn("mt-2", className)} {...props}>
      <Typography as="span" variant="h2" weight="semibold" className="gap-3 [&_svg]:size-4">
        {children}
      </Typography>
    </a>
  );
};

export { Callout, CalloutBody, CalloutAction };
export type { CalloutProps, CalloutBodyProps, CalloutActionProps };
