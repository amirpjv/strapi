'use strict';

const blog = require("../controllers/blog");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {};

// List of all available lifecycle hooks
// module.exports = {
    // initiate lifecycles
    //   lifecycles: {
        // Called before an entry is created
        // beforeCreate(data) {},
        // Called after an entry is created
        // afterCreate(result, data) {},
        // Called before entries are queried with find() method
        // beforeFind(params, populate) {},
        // Called after entries are queried with find() method
        // afterFind(results, params, populate) {},
        // Called before an entry is queried with findOne() method
        // beforeFindOne(params, populate) {},
        // Called after an entry is queried with findOne() method
        // afterFindOne(result, params, populate) {},
        // Called before an entry is updated
        // beforeUpdate(params, data) {},
        // Called after an entry is updated
        // afterUpdate(result, params, data) {},
        // Called before entries in a collection are counted
        // beforeCount(params) {},
        // Called after entries in a collection are counted
        // afterCount(result, params) {},
        // Called before searching strings in an entry
        // beforeSearch(params, populate) {},
        // Called after searching strings in an entry
        // afterSearch(result, params) {},
        // Called before entry search results are counted
        // beforeCountSearch(params) {},
        // Called after entry search results are counted
        // afterCountSearch(result, params) {},
        // Called before an entry is deleted
        // beforeDelete(params) {},
        // Called after an entry is deleted
        // afterDelete(result, params) {},
    //   },
    // };