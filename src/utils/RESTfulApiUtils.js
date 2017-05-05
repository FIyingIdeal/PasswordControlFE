/*
* @Author: yanchao
* @Date:   2017-05-05 17:02:20
* @Last Modified by:   yanchao
* @Last Modified time: 2017-05-05 18:26:25
* @Email: yanchao@hiynn.com
* @File Path: E:\project\PasswordControlFE\src\utils\RESTfulApiUtils.js
* @File Name: RESTfulApiUtils.js
* @Descript : 
*/

'use strict';

const serverUrl = "http://192.168.3.8:8080";

export default {

	loginUrl: function () {
		return serverUrl + '/loginValid';
	}
}