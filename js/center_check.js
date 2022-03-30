var count = 0;

var settings = {
    "url": "http://localhost:8080/NFTFunction/checkPending",
    "method": "POST",
    "xhrFields": {
      withCredentials: true
    },
    "timeout": 0,
  };
  
$.ajax(settings).done(function (response) {
    console.log(response);
    var i;
for(i=0;i<getJsonLength(response);i++,count++){
    localStorage.setItem("img"+count,response[i].nftId);
    
    var divTmp = document.createElement("div");
    divTmp.setAttribute("class","nftImgShow");
    
    var tmp =  document.createElement("img");
    tmp.setAttribute("class","nftImg");
    tmp.setAttribute("src",response[i].showFile)
    tmp.setAttribute("id","data");
    
    var des1 = document.createElement("p");
    des1.innerHTML = "名称："+response[i].nftName;
    var des2 = document.createElement("p");
    des2.innerHTML = "价格："+response[i].nftPrice;
    
    var pullButton = document.createElement("button");
    pullButton.setAttribute("onclick","pass("+count+")");
    pullButton.innerHTML = "通过";
    
    var delButton = document.createElement("button");
    delButton.setAttribute("onclick","refuse("+count+")");
    delButton.innerHTML = "拒绝";
    
    divTmp.appendChild(tmp);
    divTmp.appendChild(des1);
    divTmp.appendChild(des2);
    divTmp.appendChild(pullButton);
    divTmp.appendChild(delButton);
    
    document.getElementById("check").appendChild(divTmp);
    }

  });



function pass(index){
    var nftId = localStorage.getItem("img"+index);
    var settings = {
        "url": "http://localhost:8080/NFTFunction/check",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("JWT")
        },
        "xhrFields": {
          withCredentials: true
        },
        "data": JSON.stringify({
          "NFTId": nftId,
          "IsPass": 1
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        location.reload() 
      });
}


function refuse(index){
    var nftId = localStorage.getItem("img"+index);
    var settings = {
        "url": "http://localhost:8080/NFTFunction/check",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("JWT")
        },
        "xhrFields": {
          withCredentials: true
       },
        "data": JSON.stringify({
          "NFTId": nftId,
          "IsPass": -1
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        location.reload() 
      });
      
}

function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
    jsonLength++;
    }
    return jsonLength;
    }