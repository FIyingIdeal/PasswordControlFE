/*
* @Author: FIyingIdeal
* @Date:   2017-05-07 11:07:55
* @Last Modified by:   FIyingIdeal
* @Last Modified time: 2017-05-07 12:16:03
*/

'use strict';
import Ajax from '../../utils/AjaxUtils';
import UrlUtil from '../../utils/RESTfulApiUtils';
import ActionTypes from '../../utils/ActionTypeUtils';

export const regist = (user) => (dispatch) => {

	const url = UrlUtil.registUrl();
	console.log(url, user);
	Ajax.PUT(url, user, function(data) {
		if (data.success) {
			dispatch({type: ActionTypes.REGIST});
		}
	});
}