var nftId = localStorage.getItem("nftId");
var num = 3;
var settings = {
    "url": "http://localhost:8080/NFTFunction/divideNFT",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "nftId": nftId,
      "num": num
    }),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);//返回值为分割后的num份nft信息
  });