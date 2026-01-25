import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const params = new URLSearchParams(window.location.search);
const redirect = params.get("redirect");

if (redirect) {
	const cleaned = redirect.startsWith("/") ? redirect.slice(1) : redirect;
	const target = `${import.meta.env.BASE_URL}${cleaned}`;
	window.history.replaceState(null, "", target);
}

createRoot(document.getElementById("root")!).render(<App />);
