import { Box, IconButton } from "@mui/material"
import { useThemeStore } from "../../../stores"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ToggleTheme = () => {

    const { toggleColorMode, theme } = useThemeStore()

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'end',
                bgcolor: 'background.default',
                color: 'text.primary',
            }}
        >
            <IconButton sx={{ ml: 1 }} onClick={() => toggleColorMode()} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    )
}