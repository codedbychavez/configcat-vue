const packageJson = require('./package.json');

export default function () {
  return {
    name: 'inject-version',
    transform(code, id) {
      id = id.replace('\\', '/').toLowerCase();
      if (id.endsWith('src/plugins/version.js')) {
        return code.replace('CONFIGCAT_SDK_VERSION', packageJson.version);
      }

      return null;
    },
  };
}
