import { Result } from "../interfaces"
import { CustomMarker } from "./CustomMarker"

interface Props {
    usersData: Result[]
}

export const MarkersContainer = ({usersData}: Props)  => {
    return (
        <>
        {
            usersData.map((userData) => (
                <CustomMarker 
                key={userData.location.coordinates.latitude + userData.location.coordinates.longitude} 
                userData={userData} />
            ))
        }
        </>
    )
}