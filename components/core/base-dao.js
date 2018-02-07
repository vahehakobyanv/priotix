const Utility = require('./../../services/utility');


class BaseDao {

    constructor(collection) {
        this.collection = collection;
    }

    getData(query) {

        if(!this.collection) {
            return Utility.generateErrorMessage(
          Utility.ErrorTypes.CONTRACT_VIOLATION);
        }
      query = query || {};
      return this.collection.find(query);
    }

    insertData(query) {
        if(!query) {
            return Utility.generateErrorMessage(
        Utility.ErrorTypes.INVALID_QUERY);
      }
      return this.collection.create(query);
    }

    updateData(id, query) {
        if (!query) {
            return Utility.generateErrorMessage(
       Utility.ErrorTypes.INVALID_QUERY);

   }
   return this.collection.update({_id:id}, {$set: query})
 }

    deleteData(query) {
        if(!query) {
            return Utility.generateErrorMessage(
       Utility.ErrorTypes.INVALID_QUERY);
      }
      if(!this.collection) {
          return Utility.generateErrorMessage(
        Utility.ErrorTypes.CONTRACT_VIOLATION);
      }
      return this.collection.findOneAndRemove(query);
    }
}
module.exports = BaseDao;
