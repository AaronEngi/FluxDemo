 /**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


var ImageBiz = require('./biz/ImageBiz');

ImageBiz.initImage();

export default class App extends React.Component {
	
        render() {
                return (
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="page"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        style={{height: '100%'}}
                    >
                            {React.cloneElement(this.props.children, {
                                    key: this.props.location.pathname
                            })}
                    </ReactCSSTransitionGroup>
                );
        }
}

