# SaaS Sandbox

Ein simpler Prototyp zur Evaluierung von möglichen Konzepten, Workflows und des technischen Setups für ein SaaS-Projekt.

## Tech Stack & Architektur

Das Projekt ist in ein clientseitiges Frontend und einen leichtgewichtigen API-Server (Backend) aufgeteilt.

### 💻 Frontend
* **Core:** **React 19** & **React Router (Data Router)** für eine moderne, objektbasierte Routenkonfiguration mit verschachtelten Layouts (Nested Layouts) und deklarativen Route Guards.
* **Styling & UI:**
    * **Tailwind CSS** für Utility-First-Styling.
    * **Shadcn/ui (Base UI)** für barrierefreie, anpassbare UI-Komponenten.
    * **Framer Motion** für flüssige Animationen und Übergänge.
* **State Management & Data Fetching:**
    * **TanStack Query (React Query)** für asynchrones State-Management und die effiziente Anbindung an die API.
    * **React Context** für modularen, feature-bezogenen State.

### ⚙️ Backend (API)
* **Runtime:** **Node.js** & **Express** für einen minimalistischen API-Server.
* **Konfiguration:**
    * **CORS-Freigabe (`*`)** für eine unkomplizierte Kommunikation mit dem Frontend während der Entwicklung.
    * **Best-Practice-Ordnerstruktur** zur sauberen Trennung von Routen, Controllern und Services, um eine spätere Skalierung zu erleichtern.
