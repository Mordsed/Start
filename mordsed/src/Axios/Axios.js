import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "6687f993-8370-484e-ba34-37c7e1aab295"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"

})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response = response.data;
            })
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response = response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response = response.data
            })
    },
    getProfile(userId) {
        return instance.get(`/profile/` + userId)
    }
}
export const authAPI = {
    me () {
        return   instance.get(`auth/me`, )
    }
}