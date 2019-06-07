// `webpack` is included as part of the `next` package, hence:
// eslint-disable-next-line import/no-extraneous-dependencies
const dotenv = require('dotenv');
const { reduce } = require('ramda');

dotenv.config();

const EXPOSED_ENVS = [
  'APP_ENV',
  'GIT_USERNAME',
];

module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: (config) => {
    const newConfig = config;
    const { alias } = config.resolve;

    newConfig.resolve.alias = Object.assign({}, alias, {
      '@app': __dirname,
    });

    return config;
  },
  env: reduce(
    (obj, env) => ({ ...obj, [env]: process.env[env] }), {}, EXPOSED_ENVS,
  ),
};
