import {defineStore} from 'pinia';

interface UserPayloadInterface {
    username: string;
    password: string;
}

interface UserInterface {
    id: number;
    name: string;
}

interface ReviewerDocumentsInterface {
    DocumentID: string,
    FileName: string,
    FilePath: string,
    UploadDate: string,
    StudentName: string
}


const BASE_URL = "https://bdtalpykla-production.up.railway.app"
const STORE_NAME = 'auth'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        users: [],
        role: "",
        documents: [],
        reviewerDocuments: [] as ReviewerDocumentsInterface[],
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
                const r = useCookie('role');
                r.value = data?.value?.role;


                // console.log(data?.value?.access_token);
                this.authenticated = true; // set authenticated  state value to true
            }
        },


// ...

        async downloadFile(folderPath: string, zipFolderName: string) {
            try {
                const token = useCookie('token');
                const jwt = { Authorization: `Bearer ${token.value}` };

                // Adjust the endpoint and headers based on your backend API
                const response = await fetch(`${BASE_URL}/api/v1/storage/download_files?folder_path=${encodeURIComponent(folderPath)}`, {
                    method: 'GET',
                    headers: jwt,
                });

                if (!response.ok) {
                    // Handle non-successful responses
                    throw new Error(`Failed to download file. Status: ${response.status}`);
                }

                // Extract filename from the Content-Disposition header, if available
                const contentDisposition = response.headers.get('Content-Disposition');
                const filenameMatch = contentDisposition && contentDisposition.match(/filename="(.+)"/);
                const filename = filenameMatch ? filenameMatch[1] : 'downloaded_file';

                // Create a Blob from the response data
                const data = await response.blob();

                // Create a download link
                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(data);
                downloadLink.download = filename;

                // Trigger the download
                downloadLink.click();

                // Clean up the object URL
                URL.revokeObjectURL(downloadLink.href);

                return data;
            } catch (error) {
                console.error('Error downloading file:', error);
                throw error;
            }
        },


        logUserOut() {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            this.authenticated = false; // set authenticated  state value to false
            token.value = null; // clear the token cookie

            const r = useCookie('role');
            r.value = null;

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
        },
        async getReviewerDocuments(state) {
            if (this.authenticated) {

                const token = useCookie('token');
                const jwt = {Authorization: `Bearer ${token.value}`};

                const {data, pending}: any = await useFetch(`${BASE_URL}/api/v1/users/reviewer_students`, {
                    method: 'get',
                    headers: jwt
                });
                state.loading = pending;

                if (data.value) {
                    state.reviewerDocuments = data.value;
                    return state.reviewerDocuments;
                } else {
                    this.authenticated = false;
                }

            } else {
                return state.reviewerDocuments;
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
