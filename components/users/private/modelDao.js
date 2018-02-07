const mongoose = require('mongoose');
                 require('./model');
const BaseDao = require('./../../core/base-dao');
const Conn = require('./../../core/db-connection');

class UserDAO extends BaseDao {
    constructor() {
        super(Conn.model('users'));
    }

    pushDevices(id,device1){
        return this.collection.update({_id:id}, {$push: {device: device1}});
    }
}
module.exports = new UserDAO();
