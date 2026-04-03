import type { ComponentProps } from "react";

import { cn } from "@/helpers/utils";
import { Card, CardContent } from "@/components/card";

type StatusBarProps = ComponentProps<typeof Card>;

const StatusBar = ({ className, children, ...props }: StatusBarProps) => {
  return (
    <Card spacing="xs" rounded="sm" {...props} className={cn("w-fit", className)}>
      <CardContent className="flex-row items-center gap-2">{children}</CardContent>
    </Card>
  );
};

export { StatusBar };
export type { StatusBarProps };
