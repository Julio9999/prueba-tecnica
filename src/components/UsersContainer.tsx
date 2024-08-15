import { useUsersQuery } from "../hooks";
import { Markers } from "./Markers";

export const UsersMarkers = () => {

    const { data } = useUsersQuery()

    if (!data) return;

    return (
        <div>
            {
                (<Markers usersData={data.data.results} />)
            }
        </div>
    )
}