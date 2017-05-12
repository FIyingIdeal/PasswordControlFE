/*
* @Author: yanchao
* @Date:   2017-05-05 16:51:32
* @Last Modified by:   yanchao
* @Last Modified time: 2017-05-12 17:59:32
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
    Ajax.POST(url, values, function(data, status) {
        if (data.success) {
            dispatch({
                type: ActionTypes.LOGIN, user: data.data
            });
        }
    });
}