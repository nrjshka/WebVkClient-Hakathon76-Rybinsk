import {VK_LOGIN, VK_USER_INFO, VK_GROUP_INFO} from '../Const'

export default function vkReducer(state = {user: null, user_info: null, group_info: null}, action){
	switch (action.type){
		case VK_LOGIN:
				return Object.assign({}, state.user, action.payload);
			break;
		case VK_USER_INFO:
				return Object.assign({}, state, action.payload);	
			break;
		case VK_GROUP_INFO:
				return Object.assign({}, state, action.payload)
			break;
	}

	return state;
}