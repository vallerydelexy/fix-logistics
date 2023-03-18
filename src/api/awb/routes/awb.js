'use strict';

/**
 * awb router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::awb.awb');
