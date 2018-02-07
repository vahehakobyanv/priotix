const Utility = require('./../../services/utility');
const con = require('./../core/db-connection');
            require('./../users/private/model');
            require('./../device/private/model');

class Autherisation {

 _auth(permission) {
     return function(req, res, next) {
         if (permission == 'optional') {
             return next();
      }
      if (permission == 'user') {
          con.model('users').findOne({key: req.query.key}, (err, user) => {
              if (!user) {
                  return res.send(Utility.generateErrorMessage(
                Utility.ErrorTypes.PERMISSION_DENIED));
          }
          req.user = user;
          return next();
        });
      }
      if (permission == 'admin') {
          con.model('users').findOne({key: req.query.key, role: 'admin'}, (err, user) => {
              if (!user) {
                  return res.send(Utility.generateErrorMessage(
                Utility.ErrorTypes.PERMISSION_DENIED));
           }
          req.user = user;
          return next();
        });
      }
    }
  }
};

module.exports = new Autherisation();
