import { useEffect } from "react"
import "leaflet/dist/leaflet.css"
import { TileLayer, useMap } from "react-leaflet"
import { MapContainer } from 'react-leaflet/MapContainer'
import { LatLngExpression } from "leaflet"
import { Box } from "@mui/material"
import { MapContainerSkeleton, Markers, SearchUsersComponent } from ".."
import { useMapContainer } from "../../hooks"


const MapUpdater = ({ center }: { center: LatLngExpression }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);

    return null;
};


export const MapContainerComponent = () => {

    const {
        isFetching,
        lat,
        long
    } = useMapContainer()



    return (
        <>
            {
                isFetching
                    ? (<MapContainerSkeleton />)
                    : (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                            <SearchUsersComponent />
                            <MapContainer
                                center={[lat, long]}
                                zoom={1}
                            >
                                <MapUpdater center={[lat, long]} />
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Markers />
                            </MapContainer>
                        </Box>)
            }
        </>
    )
}