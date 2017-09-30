console.log(`<?xml version="1.0" encoding="UTF-8"?>`)
console.log('<!-- 本文件为 mbss-mock-server 项目 npm run mkinf 自动生成，请不要手工维护 -->')
console.log('<datas>')
console.log()
console.log('<!-- 本部分为vue项目调用的所有后台服务接口配置 -->')
console.log()

require('shelljs/global');
cd(__dirname)
find(require('./package.json')["service-dirs"])
  .filter(f => f.match(/\.js$/))
  .forEach(f => {
    // 支持 module.exports 为处理函数模式（原有的服务都是这样的）
    // 支持 exports.response 为写死响应模式(一般刚刚定的接口，写个响应范例)
    // 支持 exports.service 为处理函数模式（继续演进模拟服务：模拟服务数据要动态，要响应请求，要做判断处理）
    // 支持 exports.hsot 接口根地址，如果接口地址与主项目不同则必须填写，否则不要添加此属性
    let m = require(__dirname + '/' + f)
    if (typeof m !== 'object') {
      return // 老的 module.exports = function *(next) 写法，不予处理
    }
    let path = '/' + f.replace(/\.js$/, '').replace('mobile/','');
    console.log(`  <!-- ${m.title} -->`);
    if(m.hasOwnProperty("host") ){
      console.log(`  <action name="${path}" url="${path}" host="${m.host}"></action>`);
    }else{
      console.log(`  <action name="${path}" url="${path}"></action>`);
    }
  })

console.log()
console.log(require('fs').readFileSync('./IPU/server-interface-existing.xml', 'utf-8'))
console.log('</datas>')
