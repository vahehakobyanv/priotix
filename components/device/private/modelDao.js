const mongoose = require('mongoose');
const BaseDao = require('./../../core/base-dao');
const Conn = require('./../../core/db-connection');
             require('./model');

class DeviceDAO extends BaseDao {
    constructor() {
        super(Conn.model('devices'));
    }
}
module.exports = new DeviceDAO();
