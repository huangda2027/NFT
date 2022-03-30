var nftId = 503 //这个nftid是从搜索框中获取的nftId

// 返回值:
// response[i].userId(操作者Id)
// response[i].nftId(被操作的nftId)
// response[i].time(操作时间)
// response[i].value(操作后的值)
//============ nft的价格变化
var settings = {
    "url": "http://localhost:8080/SwitchLogFunction/SearchNFTLog_Price?nftId="+nftId,
    "method": "GET",
    "timeout": 0,
    "xhrFields": {
        withCredentials: true
      },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  //=========== nft的拥有者变化
  var settings = {
    "url": "http://localhost:8080/SwitchLogFunction/SearchNFTLog_Owner?nftId="+nftId,
    "method": "GET",
    "timeout": 0,
    "xhrFields": {
        withCredentials: true
      },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

//============= nft的状态变化
  var settings = {
    "url": "http://localhost:8080/SwitchLogFunction/SearchNFTLog_Condition?nftId="+nftId,
    "method": "GET",
    "timeout": 0,
    "xhrFields": {
        withCredentials: true
      },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });