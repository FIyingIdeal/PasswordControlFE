/*
* @Author: Administrator
* @Date:   2017-04-30 15:06:17
* @Last Modified by:   yanchao
* @Last Modified time: 2017-05-05 19:29:54
*/

'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import storeFactory from './src/utils/Store';

import routeConfig from './src/router';

const initState = {};

const store = storeFactory.getInstantiate(initState, browserHistory);

const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={ store } >
		<Router history={ history } routes={ routeConfig } />
	</Provider>,
	document.getElementById('root')
);
