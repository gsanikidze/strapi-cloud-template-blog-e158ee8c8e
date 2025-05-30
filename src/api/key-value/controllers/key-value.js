'use strict';

/**
 * key-value controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::key-value.key-value');
