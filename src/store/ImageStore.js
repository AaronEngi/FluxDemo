var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var image = null;

function setImage(receivedImage) {
    image = receivedImage;
}

function emitChange() {
    ImageStore.emit('change');
}

var ImageStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },

    getImage: function () {
        return image;
    }
});

function handleAction(action) {
    if (action.type === 'receive_image') {
        setImage(action.data);
        emitChange();
    }
}

ImageStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = ImageStore;