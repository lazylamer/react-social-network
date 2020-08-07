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

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },

    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }

}

export const authAPI = {
    checkAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    logIn(email, password, remember, captcha) {
        return instance.post(`auth/login`, {email, password, remember, captcha})
            .then(response => response.data);
    },
    logOut() {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data);
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
            .then(response => response.data);
    },
    updateProfilePhoto(image) {
        let formData = new FormData();
        formData.append('image', image);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },
    updateProfile(values) {
        return instance.put(`profile`, values)
            .then(response => response.data);
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data);
    }
}