import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// GitHub Pages serves this project from https://rahulkwt.github.io/Rahul-Online-Portfolio/
// so assets must be resolved from that sub-path in production.
export default defineConfig({
  base: "/Rahul-Online-Portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
