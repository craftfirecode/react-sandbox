import {isRouteErrorResponse, Link, useRouteError} from "react-router";
import {Button} from "@/components/ui/button";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText || error.data?.message || "Unbekannter Routen-Fehler";
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === "string") {
        errorMessage = error;
    } else {
        errorMessage = "Ein unerwarteter Fehler ist aufgetreten.";
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Hoppla!</h1>
            <p className="text-xl mb-6">Ein Fehler ist aufgetreten.</p>
            <div className="p-4 bg-muted rounded-lg mb-8 max-w-md w-full overflow-auto">
                <code className="text-sm text-destructive">{errorMessage}</code>
            </div>
            <Link to="/">
                <Button>Zurück zur Startseite</Button>
            </Link>
        </div>
    );
}
