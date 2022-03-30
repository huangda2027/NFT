var settings = {
    "url": "http://localhost:8080/userFunction/handlePending",
    "method": "GET",
    "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        for(var i = 0;i<getJsonLength(response);i++){
            var msg = document.createElement("p");
            msg.innerHTML = "举报nftId:"+response[i].nftId+",举报理由："+response[i].cause+", 举报时间:"+response[i].complaintTime;

            var readButton = document.createElement("button");
            readButton.setAttribute("onclick","read("+response[i].complaintId+")");
            readButton.innerHTML = "已读"

            var msgList = document.getElementById("msgList");
            msgList.appendChild(msg);
            msgList.appendChild(readButton);
        }

    });

    function read(complaintId){
        settings = {
            "url": "http://localhost:8080/userFunction/updateComplaintCondition?complaintId="+complaintId,
            "method": "GET",
            "timeout": 0,
            };
        
            $.ajax(settings).done(function (response) {
                console.log(response);
                location.reload();
            });
    }
    

    function getJsonLength(jsonData){
        var jsonLength = 0;
        for(var item in jsonData){
        jsonLength++;
        }
        return jsonLength;
        }

