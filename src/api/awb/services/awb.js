'use strict';

/**
 * awb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::awb.awb');
