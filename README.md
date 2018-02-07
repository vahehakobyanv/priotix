# priotix

This is our task 
we have 2 modules devices and users.
Device models is contains with name where you can write name for this device and type in now the type can be only 3 types` lamp,camera and door default value is lamp.
for creating lamp you can go localhost:3000/app/device and do post method and enter name and type or only name for type we have default value. we do that only admin can create update or delete delete. checking prcess we do on middlewere auth it is for authrization we check key.
if you like delete or update device(only if you are admin) please go localhost:3000/app/device and check put or delete method.
for creating,deleting or updating users please go localhost:3000/app/users and check put post or delete methods.(only admin can do this functions)
for adding device any users please go localhost:3000/app/users/adddevice/:id in req.params.id is that users id which you like add device in req.body.device_id you write device id and if you like you can give permmisions in req,body.restart req.body.start and req,body.shutdown deafult values is false.
