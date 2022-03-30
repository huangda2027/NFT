var salesData = [];
var salesLink = [];
var priceX = [];
var priceSeries = [];
var statusX = [];
var statusSeries = [];

function get() {
    var formControl = document.querySelector(".form-control");
    var nftId = formControl.value ;
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
        salelen = getJsonLength(response);
        salesData[0] = new Object();
        salesData[0].id = "0";
        salesData[0].name = response[0].author;
        salesData[0].symbolSize = response[0].price;
        salesData[0].x = Math.random()*920-460;
        salesData[0].y = Math.random()*365-182;
        salesData[0].value = response[0].value;
        salesData[0].category = 0;
        console.log("salelen"+salelen)
        for(var i=0; i<salelen-1; i++) {
            console.log("in")
            salesData[i+1] = new Object();
            salesData[i+1].id = 1+"";
            salesData[i+1].name = response[i].author;
            console.log("mingzi"+response[i].author);
            salesData[i+1].symbolSize = response[i+1].price;
            salesData[i+1].x = Math.random()*920-460;
            salesData[i+1].y = Math.random()*365-182;
            salesData[i+1].value = response[i+1].value;
            salesData[i+1].category = 0;
        }
        console.log(salesData)
        salesData[salelen] = new Object();
        salesData[salelen].id = salelen+"";
        salesData[salelen].name = response[salelen-1].author;
        salesData[salelen].symbolSize = response[salelen-1].price;
        salesData[salelen].x = Math.random()*920-460;
        salesData[salelen].y = Math.random()*365-182;
        salesData[salelen].value = response[salelen-1].value;
        salesData[salelen].category = 1;


        salesLink[0] = new Object();
        salesLink[0].id = '0';
        salesLink[0].source = '0';
        for(var i=0; i<salelen; i++) {
            if(i==0) {
                salesLink[i].target = i+"";
            }
            else {
                salesLink[i].id = i+"";
                salesLink[i].source = i-1+"";
                salesLink[i].target = i+"";
            }
        }
        console.log("link:"+salesLink);
    });

    var settings = {
        "url": "http://localhost:8080/SwitchLogFunction/SearchNFTLog_Price?nftId="+nftId,
        "method": "GET",
        "timeout": 0,
        "xhrFields": {
            withCredentials: true
        },
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        for(var i=0; i<getJsonLength(response); i++) {
            priceX[i]=new Object();
            priceSeries[i] = new Object();
            priceX[i] = response[i].time;
            priceSeries[i] = parseInt(response[i].value)+'';
            console.log(parseInt(response[i].value))
            //priceSeries[i] = parseInt(response[i].value);
            　
        }
    });

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
        for(var i=0; i<getJsonLength(response); i++) {
            statusSeries[i] = new Object();
            statusX[i]  = new Object();
            statusX[i] = response[i].time;
            //statusSeries[i] = response[i].value;
            statusSeries[i] = "珍藏";
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

