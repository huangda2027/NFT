var nftId = localStorage.getItem("itemId");
var reasons = document.querySelector(".reasons");

var settings = {
    "url": "http://localhost:8080/NFTFunction/addIssue",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "nftId": nftId,
      "prove": prove
    }),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });