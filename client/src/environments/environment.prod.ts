import config from '../../../config/production.js';

export const environment = {
  production: false,
  baseUrl: config.baseUrl,
  locales: ['ru'],
  defaultLocale: 'ru',
};