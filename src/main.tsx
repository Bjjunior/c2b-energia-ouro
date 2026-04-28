import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force premium dark identity globally
document.documentElement.classList.add("dark");
try { localStorage.setItem("theme", "dark"); } catch {}

createRoot(document.getElementById("root")!).render(<App />);
