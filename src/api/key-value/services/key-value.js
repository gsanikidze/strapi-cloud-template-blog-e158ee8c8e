'use strict';

/**
 * key-value service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::key-value.key-value');
