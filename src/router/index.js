/*
* @Author: Administrator
* @Date:   2017-04-30 15:36:14
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-25 15:57:45
*/

'use strict';

import React from 'react';
import { Route } from 'react-router';
import LoginView from '../components/Login/Login';
import Register from '../components/Register/Register';
import SearchView from '../views/Search/Search';

const routeConfig = [
	{
		path: '/',
		component: LoginView,
	},
	{
		path: 'regist',
		component: Register
	},
	{
		path: 'search',
		component: SearchView
	}
];

export default routeConfig;