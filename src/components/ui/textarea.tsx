import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[120px] w-full rounded-md border border-root-200 bg-linen px-4 py-3 text-sm text-root-700 shadow-sm placeholder:text-root-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ancestral-gold",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
