import "leaflet/dist/leaflet.css";
import { Box, Card } from "@mui/material";
import { MapContainerComponent, SearchUsersComponent, ToggleTheme } from "..";
import { useMapContainer } from "../../hooks";




export const MainContainer = () => {
    const { lat, long, isFetching } = useMapContainer();

    return (
        <Card 
            sx={{
                padding: '1rem'
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}>
                <ToggleTheme />
                <SearchUsersComponent />
                <MapContainerComponent
                    lat={lat}
                    long={long}
                    isFetching={isFetching}
                />
            </Box>
        </Card>
    );
};
