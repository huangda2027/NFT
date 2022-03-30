var settings = {
    "url": "http://localhost:8080/NFTFunction/IssuePending",
    "method": "POST",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    //获取的值和详情页相同
    //添加了reponse.prove（申请理由）
    var notYet = document.querySelector("#not-yet");
    var ul = notYet.querySelector(".list-group");
    for(var i=0; i<getJsonLength(response); i++) {
       var nftId = response[i].nftId;
      // var nftName = response[i].nftName;
      // var authorName = response[i].authorName;
      // var nftPrice = response[i].nftPrice;
      // var nftId = response[i].nftId;
      // var prove = response[i].prove;
      // var showFile = response[i].showFile;
      localStorage.setItem("nftName"+nftId,response[i].nftName);
      localStorage.setItem("authorName"+nftId,response[i].authorName)
      localStorage.setItem("nftPrice"+nftId,response[i].nftPrice)
      localStorage.setItem("prove"+nftId,response[i].prove)
      localStorage.setItem("showFile"+nftId,response[i].showFile)
      var li = document.createElement("li");
      li.setAttribute("class","list-group-item px-md-4 py-3 py-md-4");
      var a = document.createElement("a");
      a.setAttribute("href","javascript:;");
      a.setAttribute("class","d-flex");
      li.appendChild(a);
      var img = document.createElement("img");
      img.setAttribute("class","avatar rounded-circle");
      img.setAttribute("src",response[i].showFile);
      var div = document.createElement("div");
      div.setAttribute("class","flex-fill ms-3 text-truncate");
      var h6 = document.createElement("h6");
      h6.setAttribute("class","d-flex justify-content-between mb-0");
      var span = document.createElement("span");
      span.innerHTML = "《"+response[i].nftName+"》";
      var small = document.createElement("small");
      small.setAttribute("class","msg-time");
      small.innerHTML = response[i].applyTime;
      h6.appendChild(span);
      h6.appendChild(small);
      var span2 = document.createElement("span");
      span2.setAttribute("class","text-muted");
      span2.innerHTML = response[i].authorName;
      div.appendChild(h6);
      div.appendChild(span);
      a.appendChild(img);
      a.appendChild(div);
      ul.appendChild(li);

      // li.addEventListener("click",function(){
      //   var img = document.createElement("img");
      //   img.setAttribute("src",showFile);
      //   var antImg = document.getElementsByClassName("ant-img")[0];
      //   antImg.appendChild(img);
      //   var h21 = document.getElementsByClassName("break-all")[0];
      //   var h22 = document.getElementsByClassName("break-all")[1];
      //   console.log(nftName)
      //   h21.innerHTML = nftName;
      //   h22.innerHTML = authorName;
      //   var span1 = document.getElementsByClassName("price")[0];
      //   span1.innerHTML = nftPrice;
      //   var p1 = document.getElementsByClassName("nftid")[0];
      //   p1.innerHTML = nftId; 
      //   var p2 = document.querySelector(".content-hide");
      //   p2.innerHTML = prove;

      //   var refuseBtn = document.querySelector("#refuse-btn");
      //   refuseBtn.setAttribute("onclick","refuse("+nftId+")")
      //  // refuseBtn.addEventListener("click",refuse(response[i].nftId));
      //   var passBtn = document.querySelector("#pass-btn");
      //   //passBtn.addEventListener("click",pass(response[i].nftId));
      //   passBtn.setAttribute("onclick","pass("+nftId+")")
      // })
      //li.setAttribute("onclick","show("+nftId+","+nftName+","+authorName+","+nftPrice+","+nftId+","+prove+","+showFile+")")
      //li.setAttribute("onclick","show1("+response[i]+")")
      //li.setAttribute("onclick",'show2('+showFile+')')
      //li.setAttribute("onclick","show3("+nftId+","+nftName+","+authorName+","+nftPrice+","+nftId+")")
      li.setAttribute("onclick","show4("+response[i].nftId+")")
      // console.log(li.getAttribute("onclick"))

    }
  });


var settings = {
   "url": "http://localhost:8080/NFTFunction/Issued",
    "method": "POST",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    //获取的值和详情页相同
    //添加了response[i].prove（申请理由）
    //添加了response[i].time
    var hispart = document.querySelector("#history");
    var ul = hispart.querySelector(".list-group");
    for(var i=0; i<getJsonLength(response); i++) {
      var nftId = response[i].nftId;
      localStorage.setItem("nftName"+nftId,response[i].nftName);
      localStorage.setItem("authorName"+nftId,response[i].authorName)
      localStorage.setItem("nftPrice"+nftId,response[i].nftPrice)
      localStorage.setItem("prove"+nftId,response[i].prove)
      localStorage.setItem("showFile"+nftId,response[i].showFile)


      var li = document.createElement("li");
      li.setAttribute("class","list-group-item px-md-4 py-3 py-md-4");
      var a = document.createElement("a");
      a.setAttribute("href","javascript:;");
      a.setAttribute("class","d-flex");
      li.appendChild(a);
      var img = document.createElement("img");
      img.setAttribute("class","avatar rounded-circle");
      img.setAttribute("src",response[i].showFile);
      var div = document.createElement("div");
      div.setAttribute("class","flex-fill ms-3 text-truncate");
      var h6 = document.createElement("h6");
      h6.setAttribute("class","d-flex justify-content-between mb-0");
      var span = document.createElement("span");
      span.innerHTML = "《"+response[i].nftName+"》";
      var small = document.createElement("small");
      small.setAttribute("class","msg-time");
      small.innerHTML = response[i].applyTime;
      h6.appendChild(span);
      h6.appendChild(small);
      var span2 = document.createElement("span");
      span2.setAttribute("class","text-muted");
      span2.innerHTML = response[i].authorName;
      div.appendChild(h6);
      div.appendChild(span);
      a.appendChild(img);
      a.appendChild(div);
      ul.appendChild(li);

      // li.addEventListener("click",function(){
      //   var h21 = document.getElementsByClassName("break-all")[0];
      //   var h22 = document.getElementsByClassName("break-all")[1];
      //   h21.innerHTML = response[i].nftName;
      //   h22.innerHTML = response[i].nftUploaderId;
      //   var span1 = document.getElementsByClassName("price")[0];
      //   span1.innerHTML = response[i].nftPrice;
      //   var p1 = document.getElementsByClassName("nftid")[0];
      //   p1.innerHTML = response[i].nftId; 
      //   var p2 = document.querySelector(".content-hide");
      //   p2.innerHTML = response[i].prove;

      //   var refuseBtn = document.querySelector("#refuse-btn");
      //   refuseBtn.addEventListener("click",refuse(response[i].nftId));
      //   var passBtn = document.querySelector("#pass-btn");
      //   passBtn.addEventListener("click",pass(response[i].nftId));
      // })

      li.setAttribute("onclick","show4("+response[i].nftId+")")
    }
  });
  
//历史审核
// var settings = {
//     "url": "http://localhost:8080/NFTFunction/Issued_Pass",
//     "method": "POST",
//     "timeout": 0,
//   };
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//     //获取的值和详情页相同
//     //添加了response[i].prove（申请理由）
//     //添加了response[i].time
//     var passpart = document.querySelector("#pass-part");
//     var ul = document.querySelector(".list-group");
//     for(var i=0; i<getJsonLength(response); i++) {
//       var nftId = response[i].nftId;
//       localStorage.setItem("nftName"+nftId,response[i].nftName);
//       localStorage.setItem("authorName"+nftId,response[i].authorName)
//       localStorage.setItem("nftPrice"+nftId,response[i].nftPrice)
//       localStorage.setItem("prove"+nftId,response[i].prove)
//       localStorage.setItem("showFile"+nftId,response[i].showFile)

//       var li = document.createElement("li");
//       li.setAttribute("class","list-group-item px-md-4 py-3 py-md-4");
//       var a = document.createElement("a");
//       a.setAttribute("href","javascript:;");
//       a.setAttribute("class","d-flex");
//       li.appendChild(a);
//       var img = document.createElement("img");
//       img.setAttribute("class","avatar rounded-circle");
//       img.setAttribute("src",response[i].showFile);
//       var div = document.createElement("div");
//       div.setAttribute("class","flex-fill ms-3 text-truncate");
//       var h6 = document.createElement("h6");
//       h6.setAttribute("class","d-flex justify-content-between mb-0");
//       var span = document.createElement("span");
//       span.innerHTML = "《"+response[i].nftnName+"》";
//       var small = document.createElement("small");
//       small.setAttribute("class","msg-time");
//       small.innerHTML = response[i].applyTime;
//       h6.appendChild(span);
//       h6.appendChild(small);
//       var span2 = document.createElement("span");
//       span2.setAttribute("class","text-muted");
//       span2.innerHTML = response[i].nftUploaderId;
//       div.appendChild(h6);
//       div.appendChild(span);
//       a.appendChild(img);
//       a.appendChild(div);
//       ul.appendChild(li);

//       // li.addEventListener("click",function(){
//       //   var h21 = document.getElementsByClassName("break-all")[0];
//       //   var h22 = document.getElementsByClassName("break-all")[1];
//       //   h21.innerHTML = response[i].nftName;
//       //   h22.innerHTML = response[i].nftUploaderId;
//       //   var span1 = document.getElementsByClassName("price")[0];
//       //   span1.innerHTML = response[i].nftPrice;
//       //   var p1 = document.getElementsByClassName("nftid")[0];
//       //   p1.innerHTML = response[i].nftId; 
//       //   var p2 = document.querySelector(".content-hide");
//       //   p2.innerHTML = response[i].prove;

//       //   var refuseBtn = document.querySelector("#refuse-btn");
//       //   refuseBtn.setAttribute("onclick","refuse("+nftId+")")
//       //  // refuseBtn.addEventListener("click",refuse(response[i].nftId));
//       //   var passBtn = document.querySelector("#pass-btn");
//       //   //passBtn.addEventListener("click",pass(response[i].nftId));
//       //   passBtn.setAttribute("onclick","pass("+nftId+")")
//       // })

//       li.setAttribute("onclick","show4("+response[i].nftId+")")
//     }
//   });
  
  function pass(nftId){
    alert("生成成功！")
    var settings = {
        "url": "http://localhost:8080/NFTFunction/issue",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "nftId": nftId,
          "IsCertificate": 1
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        location.reload();
      });
  }

  function refuse(nftId){
    var settings = {
        "url": "http://localhost:8080/NFTFunction/issue",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "nftId": nftId,
          "IsCertificate": -1
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        location.reload();
      });
  }

  function getJsonLength(jsonData) {
    var jsonLength = 0;
    for (var item in jsonData) {
        jsonLength++;
    }
    return jsonLength;
}

function show(nftId,nftName,authorName,nftPrice,nftId,prove,showFile)
{
  var img = document.createElement("img");
  img.setAttribute("src",showFile);
  var antImg = document.getElementsByClassName("ant-img")[0];
  antImg.appendChild(img);
  var h21 = document.getElementsByClassName("break-all")[0];
  var h22 = document.getElementsByClassName("break-all")[1];
  console.log(nftName)
  h21.innerHTML = nftName;
  h22.innerHTML = authorName;
  var span1 = document.getElementsByClassName("price")[0];
  span1.innerHTML = nftPrice;
  var p1 = document.getElementsByClassName("nftid")[0];
  p1.innerHTML = nftId; 
  var p2 = document.querySelector(".content-hide");
  p2.innerHTML = prove;

  var refuseBtn = document.querySelector("#refuse-btn");
  refuseBtn.setAttribute("onclick","refuse("+nftId+")")
 // refuseBtn.addEventListener("click",refuse(response[i].nftId));
  var passBtn = document.querySelector("#pass-btn");
  //passBtn.addEventListener("click",pass(response[i].nftId));
  passBtn.setAttribute("onclick","pass("+nftId+")")
}

function show1(response)
{
  var img = document.createElement("img");
  img.setAttribute("src",response.showFile);
  var antImg = document.getElementsByClassName("ant-img")[0];
  antImg.appendChild(img);
  var h21 = document.getElementsByClassName("break-all")[0];
  var h22 = document.getElementsByClassName("break-all")[1];
  console.log(response.nftName)
  h21.innerHTML = response.nftName;
  h22.innerHTML = response.authorName;
  var span1 = document.getElementsByClassName("price")[0];
  span1.innerHTML = response.nftPrice;
  var p1 = document.getElementsByClassName("nftid")[0];
  p1.innerHTML = response.nftId; 
  var p2 = document.querySelector(".content-hide");
  p2.innerHTML = response.prove;

  var refuseBtn = document.querySelector("#refuse-btn");
  refuseBtn.setAttribute("onclick","refuse("+response.nftId+")")
 // refuseBtn.addEventListener("click",refuse(response[i].nftId));
  var passBtn = document.querySelector("#pass-btn");
  //passBtn.addEventListener("click",pass(response[i].nftId));
  passBtn.setAttribute("onclick","pass("+response.nftId+")")
}

function show2(showFile)
{
  var img = document.createElement("img");
  img.setAttribute("src",showFile);
  var antImg = document.getElementsByClassName("ant-img")[0];
  antImg.appendChild(img);
//   var h21 = document.getElementsByClassName("break-all")[0];
//   var h22 = document.getElementsByClassName("break-all")[1];
//   console.log(nftName)
//   h21.innerHTML = nftName;
//   h22.innerHTML = authorName;
//   var span1 = document.getElementsByClassName("price")[0];
//   span1.innerHTML = nftPrice;
//   var p1 = document.getElementsByClassName("nftid")[0];
//   p1.innerHTML = nftId; 
//   var p2 = document.querySelector(".content-hide");
//   p2.innerHTML = prove;

//   var refuseBtn = document.querySelector("#refuse-btn");
//   refuseBtn.setAttribute("onclick","refuse("+nftId+")")
//  // refuseBtn.addEventListener("click",refuse(response[i].nftId));
//   var passBtn = document.querySelector("#pass-btn");
//   //passBtn.addEventListener("click",pass(response[i].nftId));
//   passBtn.setAttribute("onclick","pass("+nftId+")")
}

function show3(nftId,nftName,authorName,nftPrice,nftId,prove)
{
  // var img = document.createElement("img");
  // img.setAttribute("src",showFile);
  // var antImg = document.getElementsByClassName("ant-img")[0];
  // antImg.appendChild(img);
  var h21 = document.getElementsByClassName("break-all")[0];
  var h22 = document.getElementsByClassName("break-all")[1];
  console.log(nftName)
  h21.innerHTML = nftName;
  h22.innerHTML = authorName;
  var span1 = document.getElementsByClassName("price")[0];
  span1.innerHTML = nftPrice;
  var p1 = document.getElementsByClassName("nftid")[0];
  p1.innerHTML = nftId; 
  var p2 = document.querySelector(".content-hide");
  p2.innerHTML = prove;

  var refuseBtn = document.querySelector("#refuse-btn");
  refuseBtn.setAttribute("onclick","refuse("+nftId+")")
 // refuseBtn.addEventListener("click",refuse(response[i].nftId));
  var passBtn = document.querySelector("#pass-btn");
  //passBtn.addEventListener("click",pass(response[i].nftId));
  passBtn.setAttribute("onclick","pass("+nftId+")")
}

function show4(nftId)
{
  var nftName = localStorage.getItem("nftName"+nftId);
  var authorName = localStorage.getItem("authorName"+nftId);
  var nftPrice = localStorage.getItem("nftPrice"+nftId);
  var prove = localStorage.getItem("prove"+nftId);
  var showFile = localStorage.getItem("showFile"+nftId)
  var img = document.createElement("img");
  img.setAttribute("src",showFile);
  var antImg = document.getElementsByClassName("ant-img")[0];
  if(antImg.firstChild!=null){
    antImg.removeChild(antImg.firstChild)
  }
  antImg.appendChild(img);
  var h21 = document.getElementsByClassName("break-all")[0];
  var h22 = document.getElementsByClassName("break-all")[1];
  console.log(nftName)
  h21.innerHTML = nftName;
  h22.innerHTML = authorName;
  var span1 = document.getElementsByClassName("price")[0];
  span1.innerHTML = nftPrice;
  var p1 = document.getElementsByClassName("nftid")[0];
  p1.innerHTML = nftId; 
  var p2 = document.querySelector(".content-hide");
  p2.innerHTML = prove;

  var refuseBtn = document.querySelector("#refuse-btn");
  refuseBtn.setAttribute("onclick","refuse("+nftId+")")
 // refuseBtn.addEventListener("click",refuse(response[i].nftId));
  var passBtn = document.querySelector("#pass-btn");
  //passBtn.addEventListener("click",pass(response[i].nftId));
  passBtn.setAttribute("onclick","pass("+nftId+")")
}