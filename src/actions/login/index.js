/*
* @Author: yanchao
* @Date:   2017-05-05 16:51:32
* @Last Modified by:   yanchao
* @Last Modified time: 2017-05-05 19:46:57
* @Email: yanchao@hiynn.com
* @File Path: E:\project\PasswordControlFE\src\actions\login\index.js
* @File Name: index.js
* @Descript : 
*/

'use strict';
import Ajax from '../../utils/AjaxUtils';
import UrlUtil from '../../utils/RESTfulApiUtils';
import ActionTypes from '../../utils/ActionTypeUtils';

export const login = (values) => dispatch => {

	const url = UrlUtil.loginUrl();
	console.log('values', values);
	Ajax.POST(url, values, function(data) {
		console.log('123', values);
		if (data.success) {
			console.log('456', data);
			dispatch({
				type: ActionTypes.LOGIN, user: data.username
			});
		}
	});
}