import {storeToRefs} from 'pinia';
import {useAuthStore} from '~/store/auth';

export default defineNuxtRouteMiddleware(async (to) => {
    const {authenticated,role} = storeToRefs(useAuthStore()); // make authenticated state reactive
    const token = useCookie('token'); // get token from cookies
    const userRole = useCookie('role'); // get user from cookies
    if(token.value){
        authenticated.value = true;
    }
    if(userRole.value){
        role.value = userRole.value;
    }
});
