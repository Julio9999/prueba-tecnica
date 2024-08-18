import { Marker, Popup } from "react-leaflet"
import { Result } from "../../interfaces";
import { Card } from "@mui/material";
import icon from "./../../assets/location.png"
import { Icon } from "leaflet";
import { useThemeStore } from "../../stores";

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

    const { theme } = useThemeStore()

    console.log(theme.palette.mode === 'light')


    return (
        <Marker position={[latitude, longitude]} icon={MarkerIcon} riseOnHover >
            <Popup key={theme.palette.mode} className={theme.palette.mode === "light" ? "light-theme" : "dark-theme"}>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 2,
                    padding: '.5rem'
                }}>
                    <span>Name: {name.first}</span>
                    <span>Lastname: {name.last}</span>
                    <span>Email: {email}</span>
                    <img src={picture.large} alt='thumbnail' />
                </Card>
            </Popup>
        </Marker>
    )
}