import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '14b7d2e4-bbe9-40b0-86ee-140450218792'
    }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    postFollowing(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },

    deleteFollowing(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                debugger;
                return response.data;
            });
    }

}

export const authAPI = {
    checkAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data);
    }
}