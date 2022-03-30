var userId = 418 //从搜索框获取的用户id


// 返回值:
// response[i].userId(操作者Id)
// response[i].happenTime(操作时间)
// response[i].logType(操作内容)
// response[i].logHash(本次操作哈希)

var settings = {
    "url": "http://localhost:8080/userFunction/log?userId="+userId,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });