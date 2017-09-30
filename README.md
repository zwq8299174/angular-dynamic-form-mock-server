东方娃娃教育软件管理系统移动版模拟后台JSON服务部分
==========================================

开发目的
-------
* 根据前后台接口文档，编写模拟服务，可以熟悉接口规范
* 可以根据当前的接口规范和自己的理解，马上提供后台服务，支撑前台开发调试
* 比使用真实的后台服务比，前台开发迭代速度更快
* 在没有实际服务端的情况下，可以给客户独立演示
* 后端服务模拟，可以在合适的情况下转变为真实的服务，用 nodejs 服务替代原先的服务(如java)，实现架构简化优化

服务挂载
-----------
* 系统自动搜索API根目录，自动挂载内部全部脚本文件
* 文件相对于项目的路径，去掉后缀".js"后，就是http服务的挂载点

编写参考
-----------

### 服务实现范例(老版)

在 "mobile/broadband/qryNum.js" 中代码如下
```javascript
/**
获取宽带空闲号码
获取空闲的宽带号码，BSS只返回1个，同时预占
*/
module.exports = function*(next) {
  var numId = Math.floor(Math.random() * 9e7 + 1e7);
  // 所有返回的内容体都写到 KOA ctx.state.data 中
  // 本框架自动加上返回码等外皮
  this.state.data = {
    "numId": "022" + numId.toString(),
  };
  yield next;
}
```

### 服务实现范例(新版)

注：新版直接合并接口文档，不再需要独立些api文档。

```javascript
exports.title = '获取一段时间内提交最多的人的姓名' // 必填
exports.path = '/mobile/stat/qryMostCommitsDeveloper' // 不写默认为文件相对路径去掉末尾的 '.js'

exports.request = {
  stime: '2000-01-23 12:23:45', // yyyy-mm-dd hh24:mi:ss 开始日期，同 oracle 常用时间格式
  etime: '2008-01-24 12:04:56', // yyyy-mm-dd hh24:mi:ss 结束日期，同 oracle 常用时间格式
}

exports.response = {
  name: '李勇',
}

// 或者从写死的响应演进到更*真实*的模拟服务
// 有 exports.service 将会覆盖 exports.response
// 无 exports.service 相当于 exports.service 内容就是直接返回 exports.response 数据

// 下面模拟随机返回的样本数据
const names = ['李勇', '盖茨', '乔布斯']
exports.service = function*(next) {
  this.state.data = {
    name: names[Math.floor(Math.random() * names.length)],
  };
  yield next;
}
```

### 请求响应日志

```
POST /mobile/broadband/qryNum
request: null
response: {
  "respCode": "0",
  "respDesc": "",
  "data": {
    "numId": "02255026009"
  }
}
```

测试方法范例
----------
```shell
curl -v -d '' http://10.26.14.143:3001/mobile/broadband/qryNum
```

生成[文档目录](index.md)
----------------------

* 在项目目录下，执行 `npm run mkidx` 将生成或更新服务API目录文件 index.md。
* 提交更新后，在 github/gitlab 可以看到该目录表格，点击链接可以看单个接口文件详情。
* 运行 `npm run mkidx` 添加接口目录条目
* 运行 `npm run mkinf` 更新 server-interface.xml 文件

总控表
-----------
* [各个业务办理界面用到的API接口](business2api.md)
* [各个接口API对开发人员的分配](api2developer.md)
* [根据模拟服务文件自动生成的API索引目录](index.md)

演进方向
--------
* 接口规范直接写成模拟服务，接口规范可供前台开发联调，而不仅仅是纸面上的规范
  - 将本项目形成一个模板项目，供新项目快速启动
* 接口规范成为代码加文档后，可以纳入git版控，方便追踪版本变更，减少版本升级变化带来的各种不同步困扰
* 接口规范模拟服务增加实际连后台和数据代码后，就成为真正的服务
  - 利用 KOA AOP 机制，先查找真正的服务，如果没有则使用模拟服务，可以渐进式的从模拟服务逐步提供真实服务，为前台开发提供连续的完整服务接口支持
  - 真实服务项目可以通过 git 子项目的形式包含接口规范和模拟服务项目
* 本项目独立成一个产品
  - 不再包含具体的模拟服务，仅仅包含框架
  - 支持错误率，时延的模拟
  - 支持 json-server 开源模块的集成
  - 支持通用模式（非艾扑项目专用），比如可以是 http get 表单提交请求
