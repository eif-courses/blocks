import {storeToRefs} from 'pinia';
import {useAuthStore} from '~/store/auth';

export default defineNuxtRouteMiddleware(async (to) => {
    const {authenticated} = storeToRefs(useAuthStore()); // make authenticated state reactive
    const token = useCookie('token'); // get token from cookies

    if(token.value){
        authenticated.value = true;
    }

});
