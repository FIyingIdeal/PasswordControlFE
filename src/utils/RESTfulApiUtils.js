/*
* @Author: yanchao
* @Date:   2017-05-05 17:02:20
* @Last Modified by:   yanchao
* @Last Modified time: 2017-05-08 11:24:42
* @Email: yanchao@hiynn.com
* @File Path: E:\project\PasswordControlFE\src\utils\RESTfulApiUtils.js
* @File Name: RESTfulApiUtils.js
* @Descript : 
*/

'use strict';

//const serverUrl = "http://192.168.99.135:8080";
const serverUrl = 'http://192.168.3.26:8080';

export default {

	loginUrl: function () {
		return serverUrl + '/loginValid';
	},

	registUrl: function () {
		return serverUrl + '/user/regist';
	}
}