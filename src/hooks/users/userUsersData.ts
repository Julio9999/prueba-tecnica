import { useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { UserAPIResponse } from "../../interfaces";

export const useUsersQuery = () => {
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData<AxiosResponse<UserAPIResponse, any>>(['users']);

    return {
        data,
        queryClient
    }
}