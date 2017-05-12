/*
* @Author: Administrator
* @Date:   2017-04-30 15:36:14
* @Last Modified by:   yanchao
* @Last Modified time: 2017-05-11 11:02:50
*/

'use strict';

import React from 'react';
import { Route } from 'react-router';
import LoginView from '../components/Login';
import Register from '../components/Register';
import SearchView from '../views/Search';

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