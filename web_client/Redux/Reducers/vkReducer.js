import {VK_LOGIN} from '../Const'

export default function vkReducer(state = {user: null}, action){
	switch (action.type){
		case VK_LOGIN:
				console.log(action.payload);
				return Object.assign({}, state.user, action.payload)
			break;
	}

	return state;
}