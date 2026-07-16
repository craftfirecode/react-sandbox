import { motion } from "framer-motion";

export function LoadingSpinner() {
    return (
        <div className="flex min-h-[calc(100vh-173px)] items-center justify-center text-muted-foreground font-sans">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" as const }}
                className="h-8 w-8 border-2 border-emerald-500 border-t-transparent rounded-full"
            />
        </div>
    )
}
