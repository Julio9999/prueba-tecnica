import { Marker, Popup } from "react-leaflet"
import { Result } from "../interfaces";
import { Box } from "@mui/material";
import icon from "./../assets/location.png"
import { Icon } from "leaflet";

interface Props {
    userData: Result;
}

const MarkerIcon = new Icon({
    iconUrl: icon,
    iconSize: [38, 38]
})

export const CustomMarker = ({ userData }: Props) => {

    const { location, name, picture, email } = userData;

    const { latitude, longitude } = location.coordinates;
    

    return (
        <Marker position={[latitude, longitude]} icon={MarkerIcon} riseOnHover >
            <Popup>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2}}>
                    <span>Name: {name.first}</span>
                    <span>Lastname: {name.last}</span>
                    <span>Email: {email}</span>
                    <img src={picture.large} alt='thumbnail' />
                </Box>
            </Popup>
        </Marker>
    )
}