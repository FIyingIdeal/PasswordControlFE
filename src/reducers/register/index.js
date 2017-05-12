/*
* @Author: FIyingIdeal
* @Date:   2017-05-07 11:32:45
* @Last Modified by:   yanchao
* @Last Modified time: 2017-05-12 19:12:12
*/

'use strict';
import ActionTypes from '../../utils/ActionTypeUtils';

export default (state = {}, action) => {
	switch(action.type) {
		case ActionTypes.REGIST: 
			console.log('in register reducer, should dispatch(push)');
	}
	return state;
}