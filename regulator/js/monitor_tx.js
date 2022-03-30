//监管交易
// 返回值:
// response[i].userId(操作者Id)
// response[i].nftId(被操作的nftId)
// response[i].time(操作时间)
// response[i].logHash(交易Hash)
// response[i].content(字符串“购买了啥nft”)
//============ nft的价格变化


//全部交易
var settings = {
    "url": "http://localhost:8080/userFunction/searchTXLog",
    "method": "GET",
    "timeout": 0,
    "xhrFields": {
        withCredentials: true
      },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });


  //按userId查询交易
  var userId = 418 //(从搜索框获取的userId)
  var settings = {
    "url": "http://localhost:8080/userFunction/searchTXLogByUserId?userId="+userId,
    "method": "GET",
    "timeout": 0,
    "xhrFields": {
      withCredentials: true
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  //按nftId查询交易
  var nftId = 517 //(从搜索框获取的nftId)
  var settings = {
    "url": "http://localhost:8080/userFunction/searchTXLogByNFTId?nftId"+nftId,
    "method": "GET",
    "timeout": 0,
    "xhrFields": {
      withCredentials: true
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });