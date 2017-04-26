var AppDispatcher = require('../dispatcher/AppDispatcher');

function receiveImage(data) {
    var action = {
        type: 'receive_image',
        data: data
    };

    AppDispatcher.dispatch(action);
}

module.exports = {
    receiveImage: receiveImage
};