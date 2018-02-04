import {VK_LOGIN} from "../Const"

export const vkLogin = () => {
    // Логин с помошью VK
    return (dispatch) => {
        VK.Auth.login( (r) => {
            console.log(r);
            if (r.session){
                // Если человек подтвердил свой вк и хочет через него зайти
            }else {
                // Если он отклонил.
                // Желательно кинуть ему напоминалку 
            }
        }, 5505295)
    }
}