import { MarkersContainer } from "./MarkersContainer"
import { useUsersQuery } from "../hooks";

export const UsersMarkers = () => {

    const { data } = useUsersQuery()

    if (!data) return;

    return (
        <div>
            {
                (<MarkersContainer usersData={data.data.results} />)
            }
        </div>
    )
}