import { TileLayer, useMap } from "react-leaflet"
import { MapContainer } from 'react-leaflet/MapContainer'
import "leaflet/dist/leaflet.css"
import { UsersMarkers } from "./UsersContainer"
import { Box } from "@mui/material"
import { SearchUsersComponent } from "./SearchUsersComponent"
import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../services"
import { useUsersStore } from "../stores"
import { useEffect } from "react"
import { LatLngExpression } from "leaflet"

const MapCenterUpdater = ({ center }: {center: LatLngExpression}) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);

    return null;
};


export const MapContainerComponent = () => {

    const query = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        gcTime: 1000 * 60 * 60,
        staleTime: 1000 * 60 * 60
    });

    const { selectedUser } = useUsersStore()

    const lat = selectedUser?.id.latitude ?? 50.5;

    const long = selectedUser?.id.longitude ?? 30.5;

    console.log(lat, long)



    return (
        <>
            {
                query.isFetching
                    ? (<p>Cargando...</p>)
                    : (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                            <SearchUsersComponent />
                            <MapContainer
                                center={[lat,long]}
                                zoom={1}
                            >
                                <MapCenterUpdater center={[lat, long]} />
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <UsersMarkers />
                            </MapContainer>
                        </Box>)
            }
        </>
    )
}