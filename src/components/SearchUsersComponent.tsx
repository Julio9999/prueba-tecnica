import { Autocomplete, TextField, Box, Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { UserOption } from "../interfaces";
import { useSearchUserComponent } from "../hooks";

export const SearchUsersComponent = () => {

    const {
        handleChange,
        handleSubmit,
        usersOptions,
        selectedUser
    } = useSearchUserComponent()


    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <form
                onSubmit={(e) => handleSubmit(e)}
            >
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Autocomplete
                        disablePortal
                        id="users"
                        options={usersOptions}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Usuario" />}
                        onChange={(e, value) => handleChange(e, value! as UserOption)}
                        getOptionLabel={(option) => option.label}
                        isOptionEqualToValue={(option, value) => option.id.latitude === value.id.latitude && option.id.longitude === value.id.longitude}
                    />
                    <Button type="submit" variant="contained" disabled={!selectedUser}>
                        <SearchIcon sx={{ width: 38, height: 38 }} />
                    </Button>
                </Box>
            </form>
        </Box>

    )
}
