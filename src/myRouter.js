/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App'
import Index from './page/index/Index'

export default class MyRouter extends React.Component {
	
	render(){

		console.log('组件开始渲染!');
        //<IndexRoute component={InvestIndex}/>
		return (
	    <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Index} />
	            </Route>
	    </Router>);
	}
}