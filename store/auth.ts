import {defineStore} from 'pinia';

interface UserPayloadInterface {
    username: string;
    password: string;
}

interface UserInterface {
    id: number;
    name: string;
}


const BASE_URL = "http://127.0.0.1:8000"
const STORE_NAME = 'auth'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        users: [],
        name: "" as string | undefined,
        id: 0,
    }),
    actions: {
        async authenticateUser({username, password}: UserPayloadInterface) {
            // useFetch from nuxt 3
            const {data, pending}: any = await useFetch(`${BASE_URL}/api/v1/auth/login`, {
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

        async getAllUsers(state) {

            if (this.authenticated) {

                const token = useCookie('token');
                const jwt = {Authorization: `Bearer ${token.value}`};

                const {data, pending}: any = await useFetch(`${BASE_URL}/api/v1/users`, {
                    method: 'get',
                    headers: jwt
                });
                state.loading = pending;

                if (data.value) {
                    state.users = data.value;
                    return state.users;
                } else {
                    this.authenticated = false;
                }

            } else {
                return state.users;
            }

        },
        // getCategoryById: (state) => {
        //     return (id: number) => state.categories.find((category: CategoryInterface) => category.id === id);
        // },
    },
});

// Activate hot reloading for this store
// if(import.meta.hot) {
//     import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
// }
