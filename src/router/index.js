/*
* @Author: Administrator
* @Date:   2017-04-30 15:36:14
* @Last Modified by:   FIyingIdeal
* @Last Modified time: 2017-05-06 23:33:33
*/

'use strict';

import React from 'react';
import { Route } from 'react-router';
import LoginView from '../components/Login';
import Register from '../components/Register';

const routeConfig = [
	{
		path: '/',
		component: LoginView,
	},
	{
		path: 'regist',
		component:Register
	}
];

export default routeConfig;