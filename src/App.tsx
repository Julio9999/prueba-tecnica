import './App.css'
import { MapContainerComponent } from './components/MapContainer'
import { UsersQueryProvider } from './context/users/users-data-context'

function App() {

  return (
    <UsersQueryProvider>
      <MapContainerComponent />
    </UsersQueryProvider>
  )
}

export default App
