const Utility = require('./../../services/utility');
const UsersDao = require('./private/modelDao');

class UsersService {

  getUsers() {
    return new Promise((resolve, reject) =>{
        UsersDao.getData()
        .then(data => {
            resolve(data);
        }).catch(err => {
          reject(Utility.generateErrorMessage(
                Utility.ErrorTypes.NOT_FOUND_DATA));
        });
    });

  }

  insertUsers(user) {
    return new Promise((resolve, reject) => {
      UsersDao.insertData ({
        username: user.username,
        name: user.name

      }). then(data => {
        resolve(data);
      }).catch(err => {
        reject(Utility.generateErrorMessage(
              Utility.ErrorTypes.USER_CREATION_ERROR));
      });
    });
  }

  updateUsers(id, user) {
    return new Promise((resolve, reject) => {
      UsersDao.updateData(id, user)
      .then(data => {
        resolve(data);
      }).catch(err => {
        reject(Utility.generateErrorMessage(
              Utility.ErrorTypes.USER_UPDATE_ERROR));
      });
    });
  }

  deleteUsers(id,user) {
    return new Promise((resolve, reject) => {
        UsersDao.deleteData(id, user)
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(Utility.generateErrorMessage(
                Utility.ErrorTypes.USER_DELETE_ERROR));
        });
    });
  }

  pushDevice(id,device) {
      return new Promise((resolve, reject) => {
          UsersDao.pushDevices(id, device)
          .then(data => {
            resolve(data);
          }).catch(err => {
            reject(Utility.generateErrorMessage(
                  Utility.ErrorTypes.USER_DEVICE_ERROR));
          });
      });
  }

}



module.exports = new UsersService();
