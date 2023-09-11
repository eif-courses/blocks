import {storeToRefs} from 'pinia';
import {useAuthStore} from '~/store/auth';

export default defineNuxtRouteMiddleware((to) => {
    const {authenticated} = storeToRefs(useAuthStore()); // make authenticated state reactive
    const token = useCookie('token'); // get token from cookies

    if (token.value) {
        // check if value exists
        // todo verify if token is valid, before updating the state

        const response = useFetch('https://onlinecourses-production.up.railway.app/users/me', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token.value
            }
        }).then((data) => {
            authenticated.value = data.status.value === 'success';
        });
        //this.loading = pending;


        // update the state to authenticated
    }

    // if token exists and url is /login redirect to homepage
    if (token.value && to?.name === 'login') {
        return navigateTo('/');
    }

    // if token doesn't exist redirect to log in
    if (!token.value && to?.name !== 'login') {
        abortNavigation();
        return navigateTo('/login');
    }
});
