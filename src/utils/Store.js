/*
* @Author: yanchao
* @Date:   2017-05-05 18:05:49
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-25 15:51:30
* @Email: yanchao@hiynn.com
* @File Path: E:\project\PasswordControlFE\src\utils\Store.js
* @File Name: Store.js
* @Descript : 
*/

'use strict';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import * as reducers from '../redux/reducer';

export default {
	getInstantiate: function(initialState, history) {

		const reducer = combineReducers({
			...reducers,
			routing: routerReducer
		});

		const instance = compose(
			applyMiddleware(thunk, routerMiddleware(history)),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		);

		const store = createStore(reducer, initialState, instance);

		return store;
	}
};