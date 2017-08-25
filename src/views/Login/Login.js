/*
* @Author: Administrator
* @Date:   2017-04-30 17:21:09
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-25 15:54:48
*/

'use strict';
import React from 'react';
import WrappedNormalLoginForm from '../../components/Login/Login';
import './Login.css';

class LoginView extends React.Component {

	render() {
		return(
			<div className='LoginForm'>
				<WrappedNormalLoginForm />
			</div>
		);
	}
}

export default LoginView;