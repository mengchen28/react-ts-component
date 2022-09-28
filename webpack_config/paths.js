const path = require('path')
const rootDir = path.resolve(__dirname, '../')

const resolvePath = filePath => {
    return path.resolve(rootDir, filePath)
}

module.exports = {
    srcPath: resolvePath('src'),
    template: resolvePath('example/index.html'),
    dist: resolvePath('dist'),
    nodeModules: resolvePath('node_modules'),
    devEntry: resolvePath('example/index.js'),
    srcIndex: resolvePath('src/index.js')
}