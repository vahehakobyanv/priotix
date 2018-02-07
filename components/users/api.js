const Utility = require('./../../services/utility');
const express = require('express');
const UsersRouter = express.Router();
const crypto = require('crypto');
const auth = require('./../authorization/user-service');
const UsersService = require('./service');


UsersRouter.get('/', (req, res) => {

    UsersService.getUsers().then(data => {
      return res.send(data);
    });
});

//Post method only admin can create users check in auth middleware
UsersRouter.post('/',auth._auth('admin'), (req, res) => {
    let username = req.body.username;
    let name = req.body.name;
    let role = req.body.role;
    let user = {
          username: username,
          name: name,
          role: role
    }
    if (!['user', 'admin'].includes(user.role)) {
    return res.send(Utility.generateErrorMessage(
                Utility.ErrorTypes.UNKNOWN_TYPE_USER_ERROR));
}
  UsersService.insertUsers(user).then(data => {
      return res.send(data);
  });

});

//add devices to users with permissions

UsersRouter.put('/adddevice/:id',auth._auth('admin'), (req,res)=>{
    if (!req.params.id) {
      return res.send(Utility.generateErrorMessage(
           Utility.ErrorTypes.PERMISSION_DENIED));
    }
    let device = {};
    let start = false;
    let id = req.params.id;
    if(req.body.start == "true"){
        start = true;
    }
    let shutdown = false;
    if(req.body.shutdown == "true"){
        shutdown = true;
    }
    let restart = false;
    if(req.body.restart == "true"){
        restart = true;
    }
    let device_id = req.body.device_id;
    device = {
        device_id: device_id,
        restart: restart,
        shutdown: shutdown,
        start: start
    }
    UsersService.pushDevice(id,device).then(data=>{
        return res.send(data);
    });
})
//update user information username name
UsersRouter.put('/:id',auth._auth('admin'), (req, res) => {
    if (!req.params.id) {
      return res.send(Utility.generateErrorMessage(
           Utility.ErrorTypes.PERMISSION_DENIED));
    }
    let user = {};
    let id = req.params.id;
    if(req.body.username){
        user.username = req.body.username;
    }
    if(req.body.name){
        user.name = req.body.name;
    }
    if(req.body.role){
        if (!['user', 'admin'].includes(req.body.role)) {
        return res.send(Utility.generateErrorMessage(
                    Utility.ErrorTypes.UNKNOWN_TYPE_USER_ERROR));
    }
    user.role = req.body.role;
}

    UsersService.updateUsers(id, user).then(data => {
      return res.send(data);
    });
});
//delete method fot users only admin
 UsersRouter.delete('/:id',auth._auth('admin'), (req, res) => {
   if (!req.params.id) {
     return res.send(Utility.generateErrorMessage(
          Utility.ErrorTypes.PERMISSION_DENIED));
   }
   let id = req.params.id;
   UsersService.deleteUsers({_id:id}).then(data => {
      return res.send(data);
   });
 });

module.exports = UsersRouter;
