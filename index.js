const koa = require('koa');
const app = koa();
const r = require('koa-router')();
const errRate = 0.0;
const net = require('net');
const port = 4567;



// 最大延迟 3s，具体随机
function timeout(maxDuration = 1000) {
    return new Promise((resolve, reject) => {
        var lag = parseInt(Math.random() * maxDuration);
        console.log(lag);
        setTimeout(resolve, lag);
    })
}

var count = 0;
app.use(require('koa-parse-json')());
app.use(function*(next) {
    this.set('Access-Control-Allow-Origin', '*');
    this.state.code = '0';
    this.state.message = '';
    this.state.body = {};
    yield next;
    if (!this.state.code) {
        this.status = 404;
        this.body = 'no such service';
        return;
    }
    this.type = 'json';
    var code = this.state.code.toString();

    this.body = this.state.body;
    this.body.code = this.state.code;
    this.body.message = this.state.message;

    if (code == 0 && Math.random() < errRate) {
        this.body.code = '-1';
        this.body.message = `随机产生的异常(几率${errRate})`;
        this.body.data = {};
    }
    console.log();
    console.log(' -'.repeat(40));
    console.log('NO.' + (++count));
    console.log(this.method + ' ' + this.url);
    console.log('request:', JSON.stringify(this.request.body, null, 2));
    console.log('response:', JSON.stringify(this.body, null, 2));
    // 模拟服务器延迟，帮助观测页面的状态，界面应该显示进度，或文字标记进行中...
    // 目前是随机三秒内的延迟
    yield timeout();
});

require('shelljs/global');
cd(__dirname)
find('mockService')
    .filter(f => f.match(/\.js$/))
    .forEach(f => {
        // 支持 module.exports 为处理函数模式（原有的服务都是这样的）
        // 支持 exports.response 为写死响应模式(一般刚刚定的接口，写个响应范例)
        // 支持 exports.service 为处理函数模式（继续演进模拟服务：模拟服务数据要动态，要响应请求，要做判断处理）
        let handler = require(__dirname + '/' + f)
        let path
        if (typeof handler === 'object') {
            path = handler.path
            if (handler.service) {
                handler = handler.service
            } else if (handler.response) {
                let obj = handler;
                handler = function*(next) {
                    this.state.body = obj.response;
                    yield next;
                }
            }
        }
        if (path) {
            r.post(path, handler);
            r.get(path, handler)
        } else {
            r.post('/' + f.replace(/\.js$/, ''), handler);
            r.get('/' + f.replace(/\.js$/, ''), handler)
        }
    })

app.use(r.routes());

function probe(port, callback) {
    var server = net.createServer().listen(port);
    var calledOnce = false;
    var timeoutRef = setTimeout(function() {
        calledOnce = true;
        callback(false, port);
    }, 2000);
    timeoutRef.unref();
    var connected = false;
    server.on('listening', function() {
        clearTimeout(timeoutRef)
        if (server)
            server.close();
        if (!calledOnce) {
            calledOnce = true;
            callback(true, port);
        };
    });
    server.on('error', function(err) {
        clearTimeout(timeoutRef);
        var result = true;
        if (err.code === 'EADDRINUSE')
            result = false;
        if (!calledOnce) {
            calledOnce = true;
            callback(result, port);
        }
    })
}

function server(_port){
    var pt = _port || __port;
    probe(pt,function(bl,_pt){
        // 端口被占用 bl 返回false
        // _pt：传入的端口号
        if(bl === true){
          console.log(666);
            app.listen(_pt, '0.0.0.0');
        }else{
            server(_pt+1)
        }
    })
}
server(port);
