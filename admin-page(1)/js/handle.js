var settings = {
    "url": "http://localhost:8080/userFunction/handlePending",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    var i;
    for(i=0;i<getJsonLength(response);i++) {
        var nftId = response[i].nftId;
        if(response[i].nftId != null) {

            localStorage.setItem("nftName"+nftId,response[i].nftName);
            localStorage.setItem("authorName"+nftId,response[i].authorName)
            localStorage.setItem("nftPrice"+nftId,response[i].nftPrice)
            localStorage.setItem("showFile"+nftId,response[i].showFile)
            complaintId = response[i].complaintId;
            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            var formCheck = document.createElement("input");
            formCheck.setAttribute("class","form-check-input");
            formCheck.setAttribute("type","checkbox");
            td1.appendChild(formCheck);

            var td2 = document.createElement("td");
            var a = document.createElement("a");
            a.setAttribute("href","#");
            a.innerHTML = response[i].nftId;
            td2.appendChild(a);
            a.setAttribute("onclick","show("+response[i].nftId+")")
            // var sideImg = document.querySelector(".side-img");
            // var img = document.createElement("img");
            // img.setAttribute("src",response[i].showFile);
            // sideImg.appendChild(img);

            // var ul = document.createElement("ul");
            // var li1 = document.createElement("li");
            // var li2 = document.createElement("li");
            // var li3 = document.createElement("li");
            // var li4 = document.createElement("li");
            // var li5 = document.createElement("li");
            // var li6 = document.createElement("li");
            // li1.innerHTML = "作品名称："+response[i].nftName;
            // li2.innerHTML = "创作者名称："+response[i].authorName;
            // var span = document.createElement("span");
            // span.innerHTML = "作品类别";
            // var btnCircle = document.createElement("div");
            // btnCircle.setAttribute("class","btn btn-circle");
            // btnCircle.innerHTML = response[i].nftType;
            // li3.appendChild(span);
            // li3.appendChild(btnCircle);
            // li4.innerHTML = "作品价格"+response[i].nftPrice;
            // li5.innerHTML = "作品信息";
            // li6.innerHTML = "创作者信息";
            // ul.appendChild(li1);
            // ul.appendChild(li2);
            // ul.appendChild(li3);
            // ul.appendChild(li4);
            // ul.appendChild(li5);
            // ul.appendChild(li6);
            // var sideContent = document.querySelector(".side-content");
            // sideContent.appendChild(ul);

            var complainBox = document.querySelector(".complain-box");
            a.addEventListener("click",function(){
              complainBox.style.display = "block";
            })

            var td3 = document.createElement("td");
            td3.innerHTML = response[i].cause;

            var td4 = document.createElement("td");
            td4.innerHTML = response[i].complaintTime;

            // var td5 = document.createElement("td");
            // td5.innerHTML = response[i].nftPrice+" (VNT)";

            var td6 = document.createElement("td");
            td6.setAttribute("class","text-end");
            var div1 = document.createElement("div");
            div1.setAttribute("class","d-flex");
            var div2 = document.createElement("div");
            div2.setAttribute("class","dropdown ms-auto");
            var button1 = document.createElement("button");
            button1.setAttribute("class","btn btn-blue");
            button1.setAttribute("onclick","flash("+complaintId+")");
            button1.innerHTML = "通过";
            var button2 = document.createElement("button");
            button2.setAttribute("class","btn btn-purple");
            button2.setAttribute("onclick","refuse("+complaintId+")");
            button2.innerHTML = "删除";
            div2.appendChild(button1);
            div2.appendChild(button2);
            div1.appendChild(div2);
            td6.appendChild(div1);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            // tr.appendChild(td5);
            tr.appendChild(td6);

            var mianPart = document.querySelector(".main-part");
            mianPart.appendChild(tr);
        }
    }
})

function flash(complainId){
  console.log(complainId)
  var settings = {
    "url": "http://localhost:8080/userFunction/updateComplaintCondition?complaintId="+complainId,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    location.reload();
  });
}


function pass(nftId) {
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

function refuse(nftId){
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