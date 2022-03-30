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
    var mainPart = document.querySelector(".main-part");
    for(var i=0; i<=getJsonLength(response); i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        td1.innerHTML = response[i].userId;
        td2.innerHTML = response[i].nftId;
        td3.innerHTML = response[i].content;
        td4.innerHTML = response[i].logHash;
        td5.innerHTML = response[i].time;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        mainPart.append(tr);
    }
});

function get() {
    var formControl = document.querySelector(".form-control");
    userId = formControl.value ;
    var mainPart = document.querySelector(".main-part");
    mainPart.innerHTML = "";
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
        for(var i=0; i<=getJsonLength(response); i++) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            td1.innerHTML = response[i].userId;
            td2.innerHTML = response[i].nftId;
            td3.innerHTML = response[i].content;
            td4.innerHTML = response[i].logHash;
            td5.innerHTML = response[i].time;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            mainPart.append(tr);
        }
    });

    var settings = {
        "url": "http://localhost:8080/userFunction/searchTXLogByNFTId?nftId"+userId,
        "method": "GET",
        "timeout": 0,
        "xhrFields": {
          withCredentials: true
        },
    };
      
    $.ajax(settings).done(function (response) {
        console.log(response);
        for(var i=0; i<=getJsonLength(response); i++) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            td1.innerHTML = response[i].userId;
            td2.innerHTML = response[i].nftId;
            td3.innerHTML = response[i].content;
            td4.innerHTML = response[i].logHash;
            td5.innerHTML = response[i].time;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            mainPart.append(tr);
        }
    });
}

function getJsonLength(jsonData) {
    var jsonLength = 0;
    for (var item in jsonData) {
        jsonLength++;
    }
    return jsonLength;
}