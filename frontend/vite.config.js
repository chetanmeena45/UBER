import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 👈 sets the dev server to run on port 3000
    proxy: {
      '/users': 'http://localhost:4000',
      '/socket.io': {
        target: 'http://localhost:4000',
        ws: true // enables WebSocket proxying
      }
    }
  }
});

