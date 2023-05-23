const User = require('../models/User');
const message = require('../models/message');
const Message = require('../models/message');

// Get all messages
const getAllMessages = async (req, res) => {
  try {
    //write a code here to get all the messages
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get messages' });
  }
};

//new Message
const newmessages = async (req, res) => {
  try {
    //write a code here for storing a new message here
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send message' });
  }
};

//Update a message
const updateMessage = async (req, res) => {
  try {
    // write a code here for updating a message of a content
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update message' });
  }
};

// Delete a message
const deleteMessage = async (req, res) => {
  try {
    //write a code here for deleting a message document based on particular id
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete message' });
  }
};

module.exports = {
  newmessages,
  updateMessage,
  getAllMessages,
  deleteMessage,
};
