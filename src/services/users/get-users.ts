import { UserAPIResponse } from "../../interfaces";
import { httpClient } from "../../lib/http-client"

export const getUsers = async() => {
    const res = await httpClient.get<UserAPIResponse>('/?results=10')
    return res;
}