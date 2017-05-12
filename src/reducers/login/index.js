/*
* @Author: yanchao
* @Date:   2017-05-05 17:44:17
* @Last Modified by:   yanchao
* @Last Modified time: 2017-05-12 19:00:28
* @Email: yanchao@hiynn.com
* @File Path: E:\project\PasswordControlFE\src\reducers\login\index.js
* @File Name: index.js
* @Descript : 
*/

'use strict';
import ActionTypes from '../../utils/ActionTypeUtils';

const initialState = {
	user: {}
};

export default (state = initialState, action) => {

	console.log('reducer', action.type);
	switch (action.type) {
		case ActionTypes.LOGIN:
			return Object.assign({}, state, { user: action.user });
		default:
			return state;
	}
}