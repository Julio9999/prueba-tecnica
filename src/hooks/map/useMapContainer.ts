import { useQuery } from "@tanstack/react-query";
import { useUsersStore } from "../../stores";
import { getUsers } from "../../services";

export const useMapContainer = () => {

    const { isFetching } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        gcTime: 1000 * 60 * 60,
        staleTime: 1000 * 60 * 60
    });



    const { selectedUser } = useUsersStore()

    const lat = selectedUser?.id.latitude ?? 50.5;

    const long = selectedUser?.id.longitude ?? 30.5;

    return {
        lat,
        long,
        isFetching
    }
}