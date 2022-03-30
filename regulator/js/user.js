function get() {
    var formControl = document.querySelector(".form-control");
    userId = formControl.value ;
    var settings = {
        "url": "http://localhost:8080/userFunction/log?userId="+userId,
        "method": "GET",
        "timeout": 0,
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
            td1.innerHTML = i+1;
            td2.innerHTML = response[i].content;
            td3.innerHTML = response[i].logHash;
            td4.innerHTML = response[i].time;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
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