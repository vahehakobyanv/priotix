const ErrorTypes = {
     PERMISSION_DENIED: 'permission_denied',
     NOT_FOUND_DATA: 'not_found_data',
     USER_CREATION_ERROR: 'user_creation_error',
     USER_UPDATE_ERROR: 'user_update_error',
     USER_DELETE_ERROR: 'user_delete_error',
     UNKNOWN_TYPE_ERROR: 'unknown_type_error',
     DEVICE_CREATION_ERROR: 'device_creation_error',
     DEVICE_UPDATE_ERROR: 'device_update_error',
     DEVICE_DELETE_ERROR: 'device_delete_error',
     USER_DEVICE_ERROR: 'user_device_error',
     CONTRACT_VIOLATION: 'contract_violation',
     INVALID_QUERY: 'invalid_query'
     UNKNOWN_TYPE_DEVICE_ERROR: 'unknown_type_device_error',
     UNKNOWN_TYPE_USER_ERROR: 'unknown_type_user_error'
};
class Utility {
static generateErrorMessage(type, options) {
       options = options || {};
       let error_object = {
           type: type || ErrorTypes.UNKNOWN_ERROR,
           message: 'Something went wrong..'
       };
       switch (type) {
            case ErrorTypes.PERMISSION_DENIED:
               error_object.message = 'Don\'t have permission for this operation.';
               break;
            case ErrorTypes.NOT_FOUND_DATA:
                error_object.message = 'Data not found.';
                break;
            case ErrorTypes.USER_CREATION_ERROR:
                error_object.message = 'Failed to create a user.';
                break;
            case ErrorTypes.USER_UPDATE_ERROR:
                error_object.message = 'User can not updated';
                break;
            case ErrorTypes.USER_DELETE_ERROR:
                error_object.message = 'User can not deleted';
                break;
            case ErrorTypes.UNKNOWN_TYPE_ERROR:
                error_object.message = 'Device is not specified.';
                break;
            case ErrorTypes.DEVICE_CREATION_ERROR:
                error_object.message = 'Failed to create a device.';
                break;
            case ErrorTypes.DEVICE_UPDATE_ERROR:
                error_object.message = 'Device can not updated';
                break;
            case ErrorTypes.USER_DELETE_ERROR:
                error_object.message = 'Device can not deleted';
                break;
            case ErrorTypes.USER_DEVICE_ERROR:
                error_object.message = 'User device can not inserted';
                break;
            case ErrorTypes.CONTRACT_VIOLATION:
                error_object.message = 'Get operation contract violation.';
                break;
            case ErrorTypes.INVALID_QUERY:
                error_object.message = 'Invalid queri.';
                break;
            case ErrorTypes.UNKNOWN_TYPE_DEVICE_ERROR:
                error_object.message = 'unknown type device please enter lamp,door or camera.';
                break;
            case ErrorTypes.UNKNOWN_TYPE_DEVICE_ERROR:
                error_object.message = 'unknown type user please enter admin or user.';
                break;


       }
       return error_object;
   }
}
module.exports = Utility;
module.exports.ErrorTypes = ErrorTypes;
