import { useUsersQuery } from "../context";
import { MarkersContainer } from "./MarkersContainer"

export const UsersMarkers = () => {

    const query = useUsersQuery();

    return (
        <div>
            {
                query.isFetching 
                ? (<p>Estoy cargando</p>) 
                : (<MarkersContainer usersData={query?.data?.data?.results!} />)
            }
        </div>
    )
}