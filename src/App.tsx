import { AuthProvider } from './components/contexts/AuthProvider'
import AppRoutes from './routes'

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
