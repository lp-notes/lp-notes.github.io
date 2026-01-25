import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const isUserSite = Boolean(repo && repo.endsWith(".github.io"));
  const base =
    mode === "development"
      ? "/"
      : env.VITE_BASE_URL || (repo && !isUserSite ? `/${repo}/` : "/");

  return {
    base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  };
});
