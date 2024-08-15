import { Marker, Popup } from "react-leaflet"
import { Result } from "../interfaces";
import { Box } from "@mui/material";

interface Props {
    userData: Result;
}

export const CustomMarker = ({ userData }: Props) => {

    const { location, name, picture, email } = userData;

    const { latitude, longitude } = location.coordinates;

    return (
        <Marker position={[latitude, longitude]}>
            <Popup>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <span>{name.first}</span>
                    <span>{name.last}</span>
                    <span>{email}</span>
                    <img src={picture.thumbnail} alt='thumbnail' />
                </Box>
            </Popup>
        </Marker>
    )
}