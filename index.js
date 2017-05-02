/*
* @Author: Administrator
* @Date:   2017-04-30 15:06:17
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-30 17:12:24
*/

'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routeConfig from './src/router';

render(
	<Router history={ browserHistory } routes={ routeConfig } />,
	document.getElementById('root')
);
