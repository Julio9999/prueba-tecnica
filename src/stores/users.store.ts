import { create, StateCreator } from "zustand";
import { UserOption } from "../interfaces";

interface UsersState {
    selectedUser: UserOption | null;
    setSelectedUser: (user: UserOption) => void;
}

const storeApi: StateCreator<UsersState> = (set) => ({
    selectedUser: null,
    setSelectedUser: (user: UserOption) => set({selectedUser: user})
})


export const useUsersStore = create<UsersState>()(
    storeApi
)