import axios from "axios"

const instance = axios.create({
	withCredentials: true,
	headers: {
		'API-KEY': '9819625b-960b-4a74-bd31-5899627502e9'
	},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => { return response.data });
	},
	postFollow(id) {
		return instance.post(`follow/${id}`, {}).then(response => { return response.data });
	},
	deleteFollow(id) {
		return instance.delete(`follow/${id}`, {}).then(response => { return response.data });
	}
}

export const profileAPI = {
	getProfileData(userId) {
		return instance.get(`profile/${userId}`).then(response => { return response.data });
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`).then(response => { return response.data });
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status }).then(response => { return response.data });
	}
}

export const headerAPI = {
	getLoginData() {
		return instance.get(`auth/me`).then(response => { return response.data });
	}
}

export const authAPI = {
	postLogin(email, password, rememberMe = false) {
		return instance.post('auth/login', { email, password, rememberMe }).then(response => { return response.data })
	},
	deleteLogin() {
		return instance.delete('auth/login').then(response => { return response.data })
	}
}