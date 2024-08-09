import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "app",
            remotes: {},
            shared: ["i18next"],
        }),
    ],
    build: {
        target: "es2022",
    },
    esbuild: {
        target: "es2022",
    },
    optimizeDeps: {
        esbuildOptions: {
            target: "es2022",
        },
    },
})
