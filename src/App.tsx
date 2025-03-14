import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter as Router } from "react-router-dom"
import { FileSystemRouter } from "file-system-router"
import config from "./config.json"

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true })

export default function App() {
    document.title = config.title

    let favicon = document.querySelector("link[rel*='icon']")

    if (!favicon) {
      favicon = document.createElement("link")
      favicon.rel = "icon"
      document.head.appendChild(favicon)
    }

    favicon.href = config.favicon
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <FileSystemRouter pages={pages} />
      </Router>
    </ThemeProvider>
  )
}
