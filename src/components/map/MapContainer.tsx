import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { TileLayer, useMap } from "react-leaflet";
import { MapContainer } from 'react-leaflet/MapContainer';
import { LatLngExpression } from "leaflet";
import { Box } from "@mui/material";
import { Markers, SearchUsersComponent } from "..";
import { useMapContainer } from "../../hooks";
import { FadeLoader } from "react-spinners";

const MapUpdater = ({ center }: { center: LatLngExpression }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);

    return null;
};

export const MapContainerComponent = () => {
    const { isFetching, lat, long } = useMapContainer();

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <SearchUsersComponent />
                <Box sx={{ position: 'relative', width: '100%', height: '500px' }}>
                    <MapContainer
                        center={[lat, long]}
                        zoom={1}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <MapUpdater center={[lat, long]} />
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {!isFetching && <Markers />}
                    </MapContainer>
                    {isFetching && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 1000,
                            }}
                        >
                            <FadeLoader color="black" />
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    );
};
