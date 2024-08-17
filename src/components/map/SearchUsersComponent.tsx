import { Autocomplete, TextField, Box, Button } from "@mui/material"
import { UserOption } from "../../interfaces";
import { useSearchUserComponent } from "../../hooks";

export const SearchUsersComponent = () => {

    const {
        handleChange,
        usersOptions,
        handleRefreshUsers,
        selectedUser,
        clearSelectedUser,
        isReFetching
    } = useSearchUserComponent()


    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                justifyContent: 'center',
                // height: 54,
                flexWrap: 'wrap'
            }}
        >
            <Autocomplete
                disablePortal
                id="users"
                options={usersOptions}
                sx={{ width: 300}}
                renderInput={(params) => <TextField {...params} label="Buscar Usuario" />}
                onChange={(e, value) => handleChange(e, value! as UserOption)}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) => option.id.latitude === value.id.latitude && option.id.longitude === value.id.longitude}
                value={selectedUser}
            />
            <Button
                variant="contained"
                color="secondary"
                sx={{ height: '100%' }}
                disabled={isReFetching || !selectedUser}
                onClick={() => clearSelectedUser()}>
                Limpiar
            </Button>
            <Button
                sx={{ height: '100%' }}
                variant="contained"
                disabled={isReFetching}
                onClick={() => handleRefreshUsers()}>
                Actualizar usuarios
            </Button>
        </Box>

    )
}
