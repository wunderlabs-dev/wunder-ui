import type { ComponentProps } from "react";
import { Avatar as AvatarPrimitive } from "radix-ui";

import { cn } from "@/helpers/utils";

type AvatarProps = ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>;
type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback>;

const Avatar = ({ className, ...props }: AvatarProps) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  );
};

const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
};

const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full",
        "bg-gray-100/10 text-base font-semibold italic text-orange-400",
        className,
      )}
      {...props}
    />
  );
};

export { Avatar, AvatarImage, AvatarFallback };
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps };
