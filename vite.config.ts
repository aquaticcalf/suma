import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import type { Plugin, NormalizedOutputOptions, OutputBundle } from "rollup"

function removeEmptyChunks(): Plugin {
  return {
    name: "remove-empty-chunks",
    generateBundle(_options: NormalizedOutputOptions, bundle: OutputBundle) {
      for (const key in bundle) {
        const chunk = bundle[key]
        if (
          chunk &&
          typeof chunk === "object" &&
          "type" in chunk &&
          chunk.type === "chunk"
        ) {
          if (!chunk.code || chunk.code.trim().length === 0) {
            delete bundle[key]
          }
        }
      }
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 54321,
  },
  base: mode === "production" ? "/" : "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const match = id.match(/node_modules\/([^/]+)\//)
            return match ? match[1] : undefined
          }
        },
      },
      plugins: [removeEmptyChunks()],
    },
    chunkSizeWarningLimit: 800,
  },
}))
