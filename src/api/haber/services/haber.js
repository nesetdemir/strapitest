'use strict';

/**
 * haber service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::haber.haber');
