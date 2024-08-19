import { CssBaseline } from '@mui/material';
import './App.css'
import { MainContainer } from './components/map/MainContainer'
import { ThemeProvider } from '@mui/material/styles';
import { useThemeStore } from './stores/theme.store';



function App() {

  const { theme } = useThemeStore()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Buscador de usuarios</h1>
      <MainContainer />
    </ThemeProvider>
  )
}

export default App
