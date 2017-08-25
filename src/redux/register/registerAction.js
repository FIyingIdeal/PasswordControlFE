/*
* @Author: Administrator
* @Date:   2017-08-25 15:40:18
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-25 15:46:44
*/
'use strict';
import Ajax from '../../utils/AjaxUtils';
import UrlUtil from '../../utils/RESTfulApiUtils';
import ActionTypes from './registerConstant';

export const regist = (user) => (dispatch) => {

	const url = UrlUtil.registUrl();
	console.log(url, user);
	Ajax.PUT(url, user, function(data) {
		if (data.success) {
			dispatch({type: ActionTypes.REGIST});
		}
	});
}