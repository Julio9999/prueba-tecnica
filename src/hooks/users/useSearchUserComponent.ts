import { useUsersQuery } from "..";
import { UserOption } from "../../interfaces";
import { useUsersStore } from "../../stores";

export const useSearchUserComponent = () => {
    const { data } = useUsersQuery()

    const { selectedUser, setSelectedUser } = useUsersStore()


    const results = data!.data?.results;


    const usersOptions = results!.map(user => ({
        label: user.name.first,
        id: user.location.coordinates
    }))


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(selectedUser)
    }

    const handleChange = (e: React.SyntheticEvent<Element, Event>, value: UserOption) => {
        setSelectedUser(value)
    }

    return {
        handleSubmit,
        handleChange,
        usersOptions,
        selectedUser
    }
}