/*
* @Author: Administrator
* @Date:   2017-08-25 15:42:06
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-25 15:50:12
*/
'use strict';
import ActionTypes from './registerConstant';

export default (state = {}, action) => {
	switch(action.type) {
		case ActionTypes.REGIST: 
			console.log('in register reducer, should dispatch(push)');
	}
	return state;
}