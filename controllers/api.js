const UsersApi = require('./../components/users/api');
const DeviceApi = require('./../components/device/api')

class ApiV1 {

 initialize(app){
   app.use('/api/users', UsersApi);
   app.use('/api/device', DeviceApi);

   app.get('/',(req,res) =>{
     return res.send('ok_1');
   });
 }
}

module.exports = new ApiV1();
