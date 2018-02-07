const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let deviceSchema = Schema({
    name: {
        type: String,
        default: null
  },

    type: {
        type: String,
        enum: ['camera','door','lamp'],
        default: 'door'
    }
});

module.exports = mongoose.model('devices', deviceSchema);
