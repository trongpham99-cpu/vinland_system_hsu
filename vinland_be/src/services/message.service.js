const messageModel = require('../models/message');

const createMessage = async (message) => {
    const newMessage = new messageModel(message);
    return await newMessage.save();
}

module.exports = {
    createMessage
}