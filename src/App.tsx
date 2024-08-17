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
      <MainContainer />
    </ThemeProvider>
  )
}

export default App
