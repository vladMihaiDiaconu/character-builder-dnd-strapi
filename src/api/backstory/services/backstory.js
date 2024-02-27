'use strict';

/**
 * backstory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::backstory.backstory');
