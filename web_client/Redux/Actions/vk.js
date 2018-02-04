import {VK_LOGIN} from "../Const"

export const vkLogin = () => {
    // Логин с помошью VK
    return (dispatch) => {
        VK.Auth.login( (r) => {
            console.log(r);
            if (r.session){
                // Если человек подтвердил свой вк и хочет через него зайти
                let data = r.session;
                let user = r.session.user;
                
                // Заливаем данные в локал сторедж
                localStorage.setItem('vkdata', JSON.stringify(r));
                
                dispatch({
                    type: VK_LOGIN,
                    payload: r,
                });
            }else {
                // Если он отклонил.
                // Желательно кинуть ему напоминалку 
            }
        }, 6037534)
    }
}