'use strict';

/**
 * key-value router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::key-value.key-value');
