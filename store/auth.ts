import {defineStore} from 'pinia';

interface UserPayloadInterface {
    username: string;
    password: string;
}

interface UserInterface {
    id: number;
    name: string;
}

interface DocumentsInterface {

}


const BASE_URL = "http://127.0.0.1:8000"
const STORE_NAME = 'auth'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        users: [],
        role: "",
        documents: [],
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

                // const superSecretRole = useCookie('role'); // useCookie new hook in nuxt 3
                // superSecretRole.value = data?.value?.role; // set token to cookie
                this.role = data?.value?.role;

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
        async getMyDocuments(state) {

            if (this.authenticated) {

                const token = useCookie('token');
                const jwt = {Authorization: `Bearer ${token.value}`};

                const {data, pending}: any = await useFetch(`${BASE_URL}/api/v1/storage/documents`, {
                    method: 'get',
                    headers: jwt
                });
                state.loading = pending;

                if (data.value) {
                    state.documents = data.value;
                    return state.documents;
                } else {
                    this.authenticated = false;
                }

            } else {
                return state.documents;
            }
        }
        // getCategoryById: (state) => {
        //     return (id: number) => state.categories.find((category: CategoryInterface) => category.id === id);
        // },
    },
});

// Activate hot reloading for this store
// if(import.meta.hot) {
//     import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
// }
