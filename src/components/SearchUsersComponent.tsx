import { Autocomplete, TextField, Box, Button } from "@mui/material"
import { useUsersQuery } from "../context";
import SearchIcon from '@mui/icons-material/Search';
import { UserOption } from "../interfaces";

export const SearchUsersComponent = () => {

    const query = useUsersQuery();

    if (query.isFetching) return;

    const { data } = query;

    const results = data?.data.results;


    const usersOptions = results!.map(user => ({
        label: user.name.first,
        id: user.location.coordinates
    }))
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('first')
    }

    const handleChange = (e: React.SyntheticEvent<Element, Event>, value: UserOption) => {
        console.log(value)
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <form
                onSubmit={(e) => handleSubmit(e)}
            >
                <Box sx={{display: 'flex', gap: 2}}>
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
                    <Button type="submit" variant="contained">
                        <SearchIcon sx={{ width: 38, height: 38 }} />
                    </Button>
                </Box>
            </form>
        </Box>
    )
}