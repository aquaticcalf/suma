import { BrowserRouter as Router } from 'react-router-dom'
import { FileSystemRouter } from 'file-system-router'

const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })

export default function App() {
  return (
    <Router>
      <FileSystemRouter pages={pages} />
    </Router>
  )
}
