/*
* @Author: yanchao
* @Date:   2017-05-05 17:02:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-25 14:19:54
* @Email: yanchao@hiynn.com
* @File Path: E:\project\PasswordControlFE\src\utils\RESTfulApiUtils.js
* @File Name: RESTfulApiUtils.js
* @Descript : 
*/

'use strict';

//const serverUrl = "http://192.168.99.135:8080";
const serverUrl = 'http://192.168.3.20:8080';

export default {

	loginUrl: function () {
		return serverUrl + '/user/login';
	},

	registUrl: function () {
		return serverUrl + '/user/regist';
	}
}