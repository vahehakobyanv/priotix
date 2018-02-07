const Utility = require('./../../services/utility');
const express = require('express');
const DeviceRouter = express.Router();

const DevicesService = require('./service');
const auth =  require('./../authorization/user-service');


DeviceRouter.get('/', (req, res) => {
    DevicesService.getDevice().then(data => {
        return res.send(data);
    });
});


DeviceRouter.post('/',auth._auth('admin'), (req, res) => {

  let name = req.body.name;
  let type = req.body.type;
  if (!['door', 'camera','lamp'].includes(type)) {
  return res.send(Utility.generateErrorMessage(
              Utility.ErrorTypes.UNKNOWN_TYPE_DEVICE_ERROR));
}
  let device =  {
      name: name,
      type: type
  }
  DevicesService.insertDevice(device).then(data => {
      return res.send(data);
  });
});

DeviceRouter.put('/:id',auth._auth('admin'), (req, res) => {

    let device={};
    let id = req.params.id;
    if(req.body.name){
        device.name = req.body.name;
    }
    if(req.body.type){
        if (!['door', 'camera', 'lamp'].includes(req.body.type)) {
            return res.send(Utility.generateErrorMessage(
                        Utility.ErrorTypes. UNKNOWN_TYPE_ERROR));
        }
        device.type = req.body.type;
    }
    DevicesService.updateDevice(id, device).then(data => {
        return res.send(data);
    });
});

DeviceRouter.delete('/:id',auth._auth('admin'), (req, res) => {
    if (!req.params.id) {
        return res.send(Utility.generateErrorMessage(
             Utility.ErrorTypes.PERMISSION_DENIED));
    }
    let id = req.params.id;
    DevicesService.deleteDevice({_id:id}).then(data => {
        return res.send(data);
   });
 });

module.exports = DeviceRouter;
