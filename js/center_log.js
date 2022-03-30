
var count = 0;
var userId = localStorage.getItem("userId");
var settings = {
    "url": "http://localhost:8080/userFunction/log?userId="+userId,
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    for(var i=0;i<getJsonLength(response);i++,count++){
        var row = document.createElement("tr");
        var col1 = document.createElement("td");
        var col2 = document.createElement("td");
        var col3 = document.createElement("td");
        var col4 = document.createElement("td");

        col1.innerHTML = i;
        col2.innerHTML = response[i].logType;
        col3.innerHTML = response[i].time;
        col4.innerHTML = response[i].logHash;
        

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);

        var list = document.getElementById("logList");
        list.appendChild(row);

    }
  
  });



  




function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
    jsonLength++;
    }
    return jsonLength;
    }