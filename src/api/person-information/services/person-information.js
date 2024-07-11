'use strict';

/**
 * person-information service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::person-information.person-information');
