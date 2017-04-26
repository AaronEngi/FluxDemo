import React from 'react';

var ImageStore = require('../../store/ImageStore');

export default class MyRouter extends React.Component {
    state = {
        imageUrl: 'https://img2.csmall.com/webPublicity/548b69fdfb2ea.jpg'
    };

    render() {

        console.log('组件开始渲染!123');
        //<IndexRoute component={InvestIndex}/>
        return (
            <img src={this.state.imageUrl} />
        );
    }

    componentDidMount () {
        ImageStore.addChangeListener(this.onImageChange.bind(this));
    }

    componentWillUnmount () {
        ImageStore.removeChangeListener(this.onImageChange.bind(this));
    }

    onImageChange() {
        console.log("onImageChange:" + ImageStore.getImage());
        this.setState({
            imageUrl: ImageStore.getImage()
        });
    }
}