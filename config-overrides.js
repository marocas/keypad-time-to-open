const path = require('path');

module.exports = {
  paths: (paths, env) => {
    const dir = path.resolve(__dirname)

    paths = {
      ...paths,
      appSrc: dir + '/packages/App',
      appIndexJs: dir + '/packages/App/index.js',
    }

    // console.log({ paths })
    return paths
  }
}
