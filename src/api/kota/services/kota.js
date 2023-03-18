'use strict';

/**
 * kota service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kota.kota');
