'use strict';

/**
 * feat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feat.feat');
