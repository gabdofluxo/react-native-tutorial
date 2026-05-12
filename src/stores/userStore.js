import { create } from 'zustand';

export const useUserStore = create((set) => ({
    users: [],
    userToEdit: {name: "", email: "", pass: "", avatar: ""},
    setUsers: (users) => set({ users }),
    addUser: (user) => set((state) => ({ users: [...state.users, user] })),
    setUserToEdit: (user) => set({ userToEdit: user }),
    updateUser: (updatedUser, id) => set((state) => ({
        users: state.users.map(user => user.id === id ? updatedUser : user)
    })),
}));

