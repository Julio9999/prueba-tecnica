import { Marker, Popup } from "react-leaflet";
import { Result } from "../../interfaces";
import { Card } from "@mui/material";
import icon from "./../../assets/location.png";
import { Icon } from "leaflet";
import { useThemeStore } from "../../stores";

interface Props {
    userData: Result;
}

const MarkerIcon = new Icon({
    iconUrl: icon,
    iconSize: [38, 38],
});

export const CustomMarker = ({ userData }: Props) => {
    const { location, name, picture, email } = userData;
    const { latitude, longitude } = location.coordinates;
    const { theme } = useThemeStore();

    return (
        <Marker position={[latitude, longitude]} icon={MarkerIcon} riseOnHover>
            <Popup key={theme.palette.mode} className={
                `
                custom-popup
                ${theme.palette.mode === "light" ? "light-theme" : "dark-theme"}
                `
            }>
                <Card
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 1,
                        padding: ".5rem",
                    }}
                >
                    <span>Name: {name.first}</span>
                    <span>Lastname: {name.last}</span>
                    <span>Email: {email}</span>
                    <img
                        src={picture.large}
                        alt={`${name.first} ${name.last}`}
                        srcSet={`
                            ${picture.thumbnail} 150w,
                            ${picture.medium} 300w,
                            ${picture.large} 600w
                        `}
                        sizes="(max-width: 600px) 150px, (max-width: 900px) 300px, 600px"
                    />
                </Card>
            </Popup>
        </Marker>
    );
};
