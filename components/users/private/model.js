const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const keygen = require('keygenerator');

const AppConstants = require('./../../../settings/constants');

function generateAPIKey() {
    return (keygen._({ length: 2 }) + '-' + keygen._({ length: 6 })
        + '-' + keygen.number()
        + '-' + keygen._({ length: 6 })
        + '-' + keygen._({ length: 8 })).replace(/&/g, '');
}
let userSchema = Schema({

  username: {
      type: String,
      index: {unique: true}
  },
  key: {
    type: String,
    default: generateAPIKey
},
  name: {
      type: String,
      default: null
  },

  role: {
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },
    device:[{
        device_id: Schema.ObjectId,
        restart: Boolean,
        shutdown: Boolean,
        start: Boolean
    }]
});

module.exports = mongoose.model('users', userSchema);
