const Utility = require('./../../services/utility');
const DevicesDao = require('./private/modelDao');

class DevicesService {

  getDevice() {
    return new Promise((resolve, reject) =>{
        DevicesDao.getData()
        .then(data => {
            resolve(data);
        }).catch(err => {
          reject(Utility.generateErrorMessage(
                Utility.ErrorTypes.NOT_FOUND_DATA));
        });
    });

  }

  insertDevice(device) {
    return new Promise((resolve, reject) => {
      DevicesDao.insertData(device).then(data => {
        resolve(data);
      }).catch(err => {
        reject(Utility.generateErrorMessage(
              Utility.ErrorTypes.DEVICE_CREATION_ERROR));
      });
    });
  }

  updateDevice(id, device) {
    return new Promise((resolve, reject) => {
      DevicesDao.updateData(id, device)
      .then(data => {
        resolve(data);
      }).catch(err => {
        reject(Utility.generateErrorMessage(
              Utility.ErrorTypes.DEVICE_UPDATE_ERROR));
      });
    });
  }

  deleteDevice(id) {
    return new Promise((resolve, reject) => {
        DevicesDao.deleteData(id)
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(Utility.generateErrorMessage(
                Utility.ErrorTypes.DEVICE_DELETE_ERROR));
        });
    });
  }

}



module.exports = new DevicesService();
