import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../services"

export const UsersContainer = () => {

    const query = useQuery({queryKey: ['users'], queryFn: getUsers, gcTime: 1000 * 60 * 30, staleTime: 1000 * 60 * 30})

    return (
        <div>
            {
                query.isFetching 
                ? (<p>Estoy cargando</p>) 
                : <span>{JSON.stringify(query.data)}</span>
            
            }
        </div>
    )
}