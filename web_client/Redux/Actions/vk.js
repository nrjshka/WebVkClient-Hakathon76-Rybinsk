import {VK_LOGIN, VK_USER_INFO} from "../Const"

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

export const vkGetUserInfo = (id) => {
    return (dispatch) => {
        let outputData = {};
        VK.Api.call(
            'users.get', 
            {user_ids : id,
             fields : 'photo_max, first_name, last_name, bdate, city, counters'
            }, 
            (data) => {
                Object.assign(outputData, data['response'][0]);
                // Запрашиваем город человека
                VK.Api.call('database.getCitiesById',
                  {city_ids: outputData['city']},
                  (data ) => {
                        if (data.response.length)
                            outputData.city = data.response[0].name;
                        else 
                            outputData.city = null;
                        
                        // Запрашиваем стену человека
                        VK.Api.call('wall.get',
                            {
                                owner_id: id,
                                count: 100
                            },
                            (data) => {
                                outputData.wall = data.response;
                                console.log('outputdata', outputData);

                                dispatch({
                                    type: VK_USER_INFO,
                                    payload : {user_info : outputData}, 
                                });
                            });

                  }
                )
            })
    }
}
