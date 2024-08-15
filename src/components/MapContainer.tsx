import { TileLayer } from "react-leaflet"
import { MapContainer } from 'react-leaflet/MapContainer'
import "leaflet/dist/leaflet.css"
import { UsersMarkers } from "./UsersContainer"
import { Box } from "@mui/material"
import { SearchUsersComponent } from "./SearchUsersComponent"



export const MapContainerComponent = () => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <SearchUsersComponent />
            <MapContainer
                center={[50.5, 30.5]}
                zoom={1}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <UsersMarkers />
            </MapContainer>
        </Box>
    )
}