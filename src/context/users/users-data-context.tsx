import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { createContext, ReactNode, useContext } from 'react';
import { getUsers } from '../../services';
import { AxiosResponse } from 'axios';
import { UserAPIResponse } from '../../interfaces';


type UsersQuery = UseQueryResult<AxiosResponse<UserAPIResponse>, Error>;
const UsersQueryContext = createContext<UsersQuery>({} as UsersQuery);

export const UsersQueryProvider = ({ children }: {children: ReactNode}) => {
    const query = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        gcTime: 1000 * 60 * 60,
        staleTime: 1000 * 60 * 60
    });

    return (
        <UsersQueryContext.Provider value={query}>
            {children}
        </UsersQueryContext.Provider>
    );
};

export const useUsersQuery = () => {
    return useContext(UsersQueryContext);
};