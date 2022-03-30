var userId = localStorage.getItem("userId");
//var userId = 51
//=======================
//全部
var settings = { 
    "url": "http://localhost:8080/NFTFunction//searchNFTByUserId_allPass?userId="+userId,
    //"url": "http://124.221.139.228:8080/NFTFunction//searchNFTByUserId_onSale?userId="+userId,
    "method": "GET",
    "timeout": 0,
    "headers": {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("JWT")
    },
    "xhrFields": {
        withCredentials: true
    },
};

$.ajax(settings).done(function (response) {
    console.log(response);
    //document.getElementById("onSale").innerHTML = JSON.stringify(response);
    //alert(getJsonLength(response))
    var i;
    for(i=0;i<getJsonLength(response);i++){
        var nftId = response[i].nftId;
        var allThing = document.createElement("article");
        allThing.setAttribute("class","things-wrapper");
        //allThing.setAttribute("style","width = 33.3333%");
        allThing.style.width = "33.3333%";
        var thingContainer = document.createElement("div");
        thingContainer.setAttribute("class","things-container");
        var imgContainer = document.createElement("div");
        var img = document.createElement("img");
        imgContainer.setAttribute("class","picture-container");
        //img.style.backgroundImage.url = response[i].showFile;
        console.log(response[i].showFile);
        img.setAttribute("src",response[i].showFile);
        img.setAttribute("class","picture-test");
        img.setAttribute("onclick","jumpToDetail("+nftId+")");
        imgContainer.appendChild(img);

        //img.style.backgroundImage = "./picture/redheart.png"
        var inforBox = document.createElement("div");
        inforBox.setAttribute("class","inf-container");

        var words = document.createElement("article");
        words.setAttribute("class","words-container");
        var name = document.createElement("p");
        name.setAttribute("class","name");
        name.innerHTML = response[i].nftName;
        console.log(response[i].nftName);
        var authorName = document.createElement("p");
        authorName.setAttribute("class","authorName");
        authorName.innerHTML = response[i].authorName;
        
        var clickBtn = document.createElement("div");

        words.appendChild(name);
        words.appendChild(authorName);

        clickBtn.setAttribute("class","click-btn");
        var a1 = document.createElement("a");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
        a1.setAttribute("class","info-btn white-part");
        a2.setAttribute("class","info-btn white-part ml-10");
        a3.setAttribute("class","info-btn ml-10");
        a1.setAttribute("href","javascript:;");
        a2.setAttribute("href","javascript:;");
        a3.setAttribute("href","javascript:;");
        a1.setAttribute("onclick","push("+nftId+")");
        a2.setAttribute("onclick","pull("+nftId+")");
        a3.setAttribute("onclick","deleteNFT("+nftId+")");
        a1.innerHTML = "上架";
        a2.innerHTML = "下架";
        a3.innerHTML = "删除";
        clickBtn.appendChild(a1);
        clickBtn.appendChild(a2);
        clickBtn.appendChild(a3);

        inforBox.appendChild(words);
        inforBox.appendChild(clickBtn);

        if(response[i].nftCondition == 1)
        {
            var sellTag = document.createElement("div");
            var sellImg = document.createElement("img");
            var sellSpan = document.createElement("span");
            sellTag.setAttribute("class","sell-tag");
            sellSpan.setAttribute("class","sale-text");
            sellSpan.innerHTML = "出售中";
            sellImg.setAttribute("src","picture/selling.png");
            sellImg.setAttribute("style","width: 0.87rem;");

            sellTag.appendChild(sellImg);
            sellTag.appendChild(sellSpan);
            thingContainer.appendChild(sellTag);
        }
        
        thingContainer.appendChild(img);
        thingContainer.appendChild(inforBox);
        allThing.appendChild(thingContainer);

       // var nftContainer = document.getElementsByName("nft-container")[0];
        var nftContainer = document.getElementsByClassName("nft-container")[1];
        //alert(nftContainer.getAttribute("id"))
        nftContainer.appendChild(allThing);
    }
});

// =========================
// 上架
var settings = { 
    "url": "http://localhost:8080/NFTFunction//searchNFTByUserId_onSale?userId="+userId,
    "method": "GET",
    "timeout": 0,
    "headers": {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("JWT")
    },
    "xhrFields": {
        withCredentials: true
    },
};

$.ajax(settings).done(function (response) {
    console.log(response);
    //document.getElementById("onSale").innerHTML = JSON.stringify(response);
    //alert(getJsonLength(response))
    var i;
    for(i=0;i<getJsonLength(response);i++){
        var nftId = response[i].nftId;
        var allThing = document.createElement("article");
        allThing.setAttribute("class","things-wrapper");
        //allThing.setAttribute("style","width = 33.3333%");
        allThing.style.width = "33.3333%";
        var thingContainer = document.createElement("div");
        thingContainer.setAttribute("class","things-container");
        var imgContainer = document.createElement("div");
        var img = document.createElement("img");
        imgContainer.setAttribute("class","picture-container");
        //img.style.backgroundImage.url = response[i].showFile;
        console.log(response[i].showFile);
        img.setAttribute("src",response[i].showFile);
        img.setAttribute("class","picture-test");
        imgContainer.appendChild(img);

        //img.style.backgroundImage = "./picture/redheart.png"
        var inforBox = document.createElement("div");
        inforBox.setAttribute("class","inf-container");

        var words = document.createElement("article");
        words.setAttribute("class","words-container");
        var name = document.createElement("p");
        name.setAttribute("class","name");
        name.innerHTML = response[i].nftName;
        console.log(response[i].nftName);
        var authorName = document.createElement("p");
        authorName.setAttribute("class","authorName");
        authorName.innerHTML = response[i].authorName;
        var clickBtn = document.createElement("div");
    
        words.appendChild(name);
        words.appendChild(authorName);

        clickBtn.setAttribute("class","click-btn");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
        a2.setAttribute("class","info-btn white-part");
        a3.setAttribute("class","info-btn ml-10");
        a2.setAttribute("href","javascript:;");
        a3.setAttribute("href","javascript:;");
        a2.setAttribute("onclick","pull("+nftId+")");
        a3.setAttribute("onclick","deleteNFT("+nftId+")");
        a2.innerHTML = "下架";
        a3.innerHTML = "删除";
        clickBtn.appendChild(a2);
        clickBtn.appendChild(a3);

        inforBox.appendChild(words);
        inforBox.appendChild(clickBtn);

        var sellTag = document.createElement("div");
        var sellImg = document.createElement("img");
        var sellSpan = document.createElement("span");
        sellTag.setAttribute("class","sell-tag");
        sellSpan.setAttribute("class","sale-text");
        sellSpan.innerHTML = "出售中";
        sellImg.setAttribute("src","picture/selling.png");
        sellImg.setAttribute("style","width: 0.87rem;");

        sellTag.appendChild(sellImg);
        sellTag.appendChild(sellSpan);
        thingContainer.appendChild(sellTag);
        
        thingContainer.appendChild(img);
        thingContainer.appendChild(inforBox);
        allThing.appendChild(thingContainer);

       // var nftContainer = document.getElementsByName("nft-container")[0];
        var nftContainer = document.getElementsByClassName("nft-container")[2];
        //alert(nftContainer.getAttribute("id"))
        nftContainer.appendChild(allThing);
    }
});
//=====================
//仓库
settings = {
    "url": "http://localhost:8080/NFTFunction//searchNFTByUserId?userId="+userId,
    "method": "Get",
    "timeout": 0,
    "headers": {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("JWT")
    },
    "xhrFields": {
        withCredentials: true
    },
};

$.ajax(settings).done(function (response) {
    console.log(response);
    //document.getElementById("onSale").innerHTML = JSON.stringify(response);
    //alert(getJsonLength(response));
    
    for(i=0;i<getJsonLength(response);i++){
        var nftId = response[i].nftId;
        var allThing = document.createElement("article");
        allThing.setAttribute("class","things-wrapper");
        //allThing.setAttribute("style","width = 33.3333%");
        allThing.style.width = "33.3333%";
        var thingContainer = document.createElement("div");
        thingContainer.setAttribute("class","things-container");
        var imgContainer = document.createElement("div");
        var img = document.createElement("img");
        imgContainer.setAttribute("class","picture-container");
        //img.style.backgroundImage.url = response[i].showFile;
        console.log(response[i].showFile);
        img.setAttribute("src",response[i].showFile);
        img.setAttribute("class","picture-test");
        imgContainer.appendChild(img);

        //img.style.backgroundImage = "./picture/redheart.png"
        var inforBox = document.createElement("div");
        inforBox.setAttribute("class","inf-container");

        var words = document.createElement("article");
        words.setAttribute("class","words-container");
        var name = document.createElement("p");
        name.setAttribute("class","name");
        name.innerHTML = response[i].nftName;
        console.log(response[i].nftName);
        var authorName = document.createElement("p");
        authorName.setAttribute("class","authorName");
        authorName.innerHTML = response[i].authorName;

        var clickBtn = document.createElement("div");
        words.appendChild(name);
        words.appendChild(authorName);

        clickBtn.setAttribute("class","click-btn");
        var a1 = document.createElement("a");
        var a3 = document.createElement("a");
        a1.setAttribute("class","info-btn white-part");
        a3.setAttribute("class","info-btn ml-10");
        a1.setAttribute("href","javascript:;");
        a3.setAttribute("href","javascript:;");
        a1.setAttribute("onclick","push("+nftId+")");
        a3.setAttribute("onclick","deleteNFT("+nftId+")");
        a1.innerHTML = "上架";
        a3.innerHTML = "删除";
        clickBtn.appendChild(a1);
        clickBtn.appendChild(a3);

        inforBox.appendChild(words);
        inforBox.appendChild(clickBtn);

        thingContainer.appendChild(img);
        thingContainer.appendChild(inforBox);
        allThing.appendChild(thingContainer);

       // var nftContainer = document.getElementsByName("nft-container")[0];
        var nftContainer = document.getElementsByClassName("nft-container")[3];
        //alert(nftContainer.getAttribute("id"))
        nftContainer.appendChild(allThing);
    }
});


//================================
//待审核
settings = {
    "url": "http://localhost:8080/NFTFunction//searchNFTByUserId_onCheck?userId="+userId,
    "method": "GET",
    "timeout": 0,
    "headers": {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("JWT")
    },
    "xhrFields": {
        withCredentials: true
    },
    };

    $.ajax(settings).done(function (response) {
    console.log(response);
    //document.getElementById("onSale").innerHTML = JSON.stringify(response);
    //alert(getJsonLength(response));

    for(i=0;i<getJsonLength(response);i++){
        var nftId = response[i].nftId;
        var allThing = document.createElement("article");
        allThing.setAttribute("class","things-wrapper");
        //allThing.setAttribute("style","width = 33.3333%");
        allThing.style.width = "33.3333%";
        var thingContainer = document.createElement("div");
        thingContainer.setAttribute("class","things-container");
        var imgContainer = document.createElement("div");
        var img = document.createElement("img");
        imgContainer.setAttribute("class","picture-container");
        //img.style.backgroundImage.url = response[i].showFile;
        console.log(response[i].showFile);
        img.setAttribute("src",response[i].showFile);
        img.setAttribute("class","picture-test");
        imgContainer.appendChild(img);

        //img.style.backgroundImage = "./picture/redheart.png"
        var inforBox = document.createElement("div");
        inforBox.setAttribute("class","inf-container");

        var words = document.createElement("article");
        words.setAttribute("class","words-container");
        var name = document.createElement("p");
        name.setAttribute("class","name");
        name.innerHTML = response[i].nftName;
        console.log(response[i].nftName);
        var authorName = document.createElement("p");
        authorName.setAttribute("class","authorName");
        authorName.innerHTML = response[i].authorName;

        words.appendChild(name);
        words.appendChild(authorName);

        thingContainer.appendChild(img);
        thingContainer.appendChild(inforBox);
        allThing.appendChild(thingContainer);

       // var nftContainer = document.getElementsByName("nft-container")[0];
        var nftContainer = document.getElementsByClassName("nft-container")[4];
        //alert(nftContainer.getAttribute("id"))
        nftContainer.appendChild(allThing);
}
});


//=========================
//我喜欢
settings = {
    "url": "http://localhost:8080/NFTFunction///searchLike?userId="+userId,
    "method": "GET",
    "timeout": 0,
    "headers": {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("JWT")
    },
    "xhrFields": {
        withCredentials: true
    },
    };
    
    $.ajax(settings).done(function (response) {
    console.log(response);
    for(i=0;i<getJsonLength(response);i++){
        
        var nftId = response[i].nftId;
        var allThing = document.createElement("article");
        allThing.setAttribute("class","things-wrapper");
        //allThing.setAttribute("style","width = 33.3333%");
        allThing.style.width = "33.3333%";
        var thingContainer = document.createElement("div");
        thingContainer.setAttribute("class","things-container");
        var imgContainer = document.createElement("div");
        var img = document.createElement("img");
        imgContainer.setAttribute("class","picture-container");
        //img.style.backgroundImage.url = response[i].showFile;
        console.log(response[i].showFile);
        img.setAttribute("src",response[i].showFile);
        img.setAttribute("class","picture-test");
        imgContainer.appendChild(img);

        //img.style.backgroundImage = "./picture/redheart.png"
        var inforBox = document.createElement("div");
        inforBox.setAttribute("class","inf-container");

        var words = document.createElement("article");
        words.setAttribute("class","words-container");
        var name = document.createElement("p");
        name.setAttribute("class","name");
        name.innerHTML = response[i].nftName;
        console.log(response[i].nftName);
        var authorName = document.createElement("p");
        authorName.setAttribute("class","authorName");
        authorName.innerHTML = response[i].authorName;

        words.appendChild(name);
        words.appendChild(authorName);

        var likeArea = document.createElement("div");
        likeArea.setAttribute("class","fov-right-box");
        var likeContainer = document.createElement("div");
        likeContainer.setAttribute("class","favour");
        var heart = document.createElement("a");
        heart.setAttribute("class","heart");
        var likeButton = document.createElement("img");
        likeButton.setAttribute("src","picture/redheart.png");
        likeButton.setAttribute("onclick","like("+nftId+")");

        heart.appendChild(likeButton);
        likeContainer.appendChild(heart);
        likeArea.appendChild(likeContainer);
        inforBox.appendChild(words);
        inforBox.appendChild(likeArea);

        var sellTag = document.createElement("div");
        var sellImg = document.createElement("img");
        var sellSpan = document.createElement("span");
        sellTag.setAttribute("class","sell-tag");
        sellSpan.setAttribute("class","sale-text");
        sellSpan.innerHTML = "出售中";
        sellImg.setAttribute("src","picture/selling.png");
        sellImg.setAttribute("style","width: 0.87rem;");

        sellTag.appendChild(sellImg);
        sellTag.appendChild(sellSpan);

        thingContainer.appendChild(img);
        thingContainer.appendChild(inforBox);
        thingContainer.appendChild(sellTag);
        allThing.appendChild(thingContainer);

       // var nftContainer = document.getElementsByName("nft-container")[0];
        var nftContainer = document.getElementsByClassName("nft-container")[0];
        //alert(nftContainer.getAttribute("id"))
        nftContainer.appendChild(allThing);
    }

});


//获取json串长度函数
function getJsonLength(jsonData){
        var jsonLength = 0;
        for(var item in jsonData){
        jsonLength++;
        }
        return jsonLength;
        }

        function display(){
        var i;
        for(i=0;i<3;i++){
        var divTmp = document.createElement("div");
        divTmp.setAttribute("class","nftImgShow");
        var tmp =  document.createElement("img");
        tmp.setAttribute("class","nftImg");
        tmp.setAttribute("src",)
        var des = document.createElement("p");
        des.innerHTML = "hh";
        divTmp.appendChild(tmp);
        divTmp.appendChild(des);
        document.getElementById("onSale").appendChild(divTmp);
    }
}

//下架函数
function pull(nftId){
    alert("下架")
    var settings = {
    "url": "http://localhost:8080/NFTFunction/updateCondition",
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
    "nftId": nftId,
    "nftCondition": 0
    }),
    };

    $.ajax(settings).done(function (response) {
    console.log(response);
    });
    location.reload() 
}

//上架函数
function push(nftId){
    alert("上架")
    var settings = {
    "url": "http://localhost:8080/NFTFunction/updateCondition",
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
    "nftId": nftId,
    "nftCondition": 1
    }),
    };

    $.ajax(settings).done(function (response) {
    console.log(response);
    });

    location.reload() 
}

//删除函数
function deleteNFT(nftId){
    alert("删除");
    var settings = {
    "url": "http://localhost:8080/NFTFunction/deleteNFT",
    "method": "POST",
    "timeout": 0,
    "headers": {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("JWT")
    },
    "data": JSON.stringify({
    "NFTId": nftId
    }),
    "xhrFields": {
            withCredentials: true
        },
    };

    $.ajax(settings).done(function (response) {
    console.log(response);
    location.reload();
    //alert(JSON.stringify(response.nftId))
    });
}


//同步函数
function syc(nftId){
    localStorage.setItem("sycId",nftId);
    window.location = "./syc.html"
}

function jumpToDetail(nftId){
    localStorage.setItem("inforId",nftId);
    window.location.href="../Market/detail.html";
  }