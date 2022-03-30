var nftId = localStorage.getItem("inforId") //从详情页获取的nftId
var userId = localStorage.getItem("userId") //获取当前登录的userId
var settings = {
    "url": "http://localhost:8080/userFunction/searchLogByUserIdAndNFTId?userId="+userId+"&nftId="+nftId,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    for(var i=0;i<getJsonLength(response);i++) {
      var records = document.createElement("div");
      records.setAttribute("class","records");
      var div1 = document.createElement("div");
      var div2 = document.createElement("div");
      var div3 = document.createElement("div");
      var div4 = document.createElement("div");
      div1.setAttribute("class","flex-1");
      div2.setAttribute("class","flex-2");
      div3.setAttribute("class","flex-1");
      div4.setAttribute("class","flex-1 flex-right");
      div1.innerHTML = response[i].content;
      div2.innerHTML = response[i].logHash;
      if( response[i].price !=null)
      div3.innerHTML = response[i].price;
      else{
        div3.innerHTML = 0;
      }
      div4.innerHTML = response[i].time;
      records.appendChild(div1);
      records.appendChild(div2);
      records.appendChild(div3);
      records.appendChild(div4);
      
      var antProgress = document.querySelector(".ant-progress");
      antProgress.appendChild(records);
    }
  });

  function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
    jsonLength++;
    }
    return jsonLength;
    }