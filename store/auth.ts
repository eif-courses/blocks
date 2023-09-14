import {defineStore} from 'pinia';

interface UserPayloadInterface {
    username: string;
    password: string;
}


const BASE_URL = "https://onlinecourses-production.up.railway.app"


export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        categories: [],
        id: 0,
    }),
    actions: {
        async authenticateUser({username, password}: UserPayloadInterface) {
            // useFetch from nuxt 3
            const {data, pending}: any = await useFetch(`${BASE_URL}/login`, {
                method: 'post',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: new URLSearchParams({
                    'username': username,
                    'password': password,
                })
            });
            this.loading = pending;

            if (data.value) {
                const token = useCookie('token'); // useCookie new hook in nuxt 3
                token.value = data?.value?.access_token; // set token to cookie
                // console.log(data?.value?.access_token);
                this.authenticated = true; // set authenticated  state value to true
            }
        },
        logUserOut() {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            this.authenticated = false; // set authenticated  state value to false
            token.value = null; // clear the token cookie
        },
    },
    getters: {

        async getCategories(state) {

            if (this.authenticated) {

                const token = useCookie('token');
                const jwt = {Authorization: `Bearer ${token.value}`};

                const {data, pending}: any = await useFetch(`${BASE_URL}/api/v1/products/categories`, {
                    method: 'get',
                    headers: jwt
                });
                state.loading = pending;

                if (data.value) {
                    state.categories = data.value;
                    return state.categories;
                } else {
                    this.authenticated = false;
                }

            } else {
                return state.categories;
            }

        },
        getCategoryById(state) {
            return this.categories.find((category: any) => category.id === state.id);
        },

    },


});
