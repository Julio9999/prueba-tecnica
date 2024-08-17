import { Box } from "@mui/material"
import { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet"
import { FadeLoader } from "react-spinners"
import { Markers } from "./Markers";

const MapUpdater = ({ center }: { center: LatLngExpression }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);

    return null;
};

interface Props {
    lat: number;
    long: number;
    isFetching: boolean;
}

export const MapContainerComponent = ({lat, long, isFetching}: Props) => {


    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            height: '500px'
        }}>
            <MapContainer
                center={[lat, long]}
                zoom={1}
                style={{
                    width: '100%',
                    height: '100%'
                }}
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
    )
}