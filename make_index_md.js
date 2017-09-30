console.log(`
* 注1：本接口目录在项目目录下，使用 npm run mkidx 自动生成，请不要手工维护
* 注2：每当新加接口和改变接口title/path时，重新运行 npm run mkidx 更新并且提交到版本库

前后台接口 JSON API 清单
=======================
服务路径 ( service-path ) | 服务名称标题 ( service-title )
-------------------------|---------------------------`)

require('shelljs/global');
cd(__dirname)
find(require('./package.json')["service-dirs"])
  .filter(f => f.match(/\.js$/))
  .forEach(f => {
    // 支持 module.exports 为处理函数模式（原有的服务都是这样的）
    // 支持 exports.response 为写死响应模式(一般刚刚定的接口，写个响应范例)
    // 支持 exports.service 为处理函数模式（继续演进模拟服务：模拟服务数据要动态，要响应请求，要做判断处理）
    let m = require(__dirname + '/' + f)
    let path
    if (typeof m !== 'object') {
      return // 老的 module.exports = function *(next) 写法，不予处理
    }
    console.log(`[${m.path}](${f}) | ${m.title}`)
  })
