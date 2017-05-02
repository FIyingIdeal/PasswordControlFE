/*
* @Author: Administrator
* @Date:   2017-04-30 17:21:09
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-30 17:36:28
*/

'use strict';
import React from 'react';
import WrappedNormalLoginForm from '../../components/Login';
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