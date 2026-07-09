import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";

export function ShineButton({
                                children,
                                className,
                                ...props
                            }: React.ComponentProps<typeof Button>) {
    return (
        <Button
            className={cn(
                "relative overflow-hidden group",
                className
            )}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            <span
                className={cn(
                    "absolute inset-0 -translate-x-full group-hover:translate-x-full",
                    "transition-transform duration-700 ease-in-out",
                    "bg-gradient-to-r from-transparent via-white/30 to-transparent",
                    "skew-x-12"
                )}
            />
        </Button>
    );
}
