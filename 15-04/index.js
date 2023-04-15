
const http = require("http");
http.createServer(function(request,response){
    response.end('<html><head></head><body><h1>привет</h1></body></html>');
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});
