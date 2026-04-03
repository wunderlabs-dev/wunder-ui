import type { ComponentProps } from "react";

import { cn } from "@/helpers/utils";
import { Card, CardContent } from "@/components/card";

type AppBarProps = ComponentProps<typeof Card>;

const AppBar = ({ className, children, ...props }: AppBarProps) => {
  return (
    <Card
      variant="solid"
      spacing="sm"
      rounded="sm"
      {...props}
      className={cn("w-fit shadow-card-inset", className)}
    >
      <CardContent className="items-center gap-3">{children}</CardContent>
    </Card>
  );
};

export { AppBar };
export type { AppBarProps };
