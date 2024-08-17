import { useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { UserAPIResponse } from "../../interfaces";

export const useUsersQuery = () => {
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData<AxiosResponse<UserAPIResponse>>(['users']);
    const queryState = queryClient.getQueryState(['users'])
    const isReFetching = queryState?.fetchStatus == "fetching"

    return {
        data,
        queryClient,
        queryState,
        isReFetching
    }
}