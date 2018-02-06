import {VK_LOGIN, VK_USER_INFO, VK_GROUP_INFO, VK_GROUP_DATA, VK_FRIENDS_GET} from "../Const"

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
    // Отправляет информацию о человеке
    return (dispatch) => {
        let outputData = {};
        VK.Api.call(
            'users.get', 
            {
                user_ids : id,
                fields : 'photo_max, first_name, last_name, bdate, city, counters',
            }, 
            (data) => {
                console.log(data);
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

export const vkGetGroupList = (id) => {
    // Отправляет список групп
    return (dispatch) => {
        let outputdata = {};

        VK.Api.call('groups.get',
            {
                user_id : id,
                extended: 1,
                count : 200,
                fields : "id, name, photo_200"
            }, 
            (data) => {
                console.log(data);
                dispatch({
                    type: VK_GROUP_INFO,
                    payload: {group_info : data.response},
                })
            })
    }
}

export const vkGetGroupInfo = (id) => {
    // Отправляет информацию о группе
    return (dispatch) => {
        let outputData = {};

        VK.Api.call(
            'groups.getById',
            {
                group_id : id,
                fields: "description, counters, type",
            },
            (data) => {
                Object.assign(outputData, data);
                VK.Api.call(
                    'wall.get',
                    {
                        owner_id : -id,
                        count : 100,
                    },
                    (data) => {
                        outputData.wall = data.response;
                        console.log('outputData', outputData);
                        dispatch({
                            type : VK_GROUP_DATA,
                            payload : {group_data : outputData},
                        });
                    }
                )
            })
    }
}

export const vkGetFriendsList = (id) => {
    // Возвращает список друзей
    return (dispatch) => {
        VK.Api.call(
            'friends.get',
            {
                user_id : id,
                order : "hints",
                count : 300,
                fields : "nickname, photo_200_orig" 
            },
            (data) => {
                dispatch({
                    type: VK_FRIENDS_GET,
                    payload: {friends_data : data.response},
                })
            }
        )
    }
}