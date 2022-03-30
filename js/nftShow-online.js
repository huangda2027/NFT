
var settings = {
    "url": "http://124.221.139.228:8080/NFTFunction/searchNFTOnSale",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    for(var i=0;i<getJsonLength(response);i++)
    {
        //localStorage.setItem("item"+i,response[i].nftId);
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
        //img/孔王兴/渡：系列/微信图片_20200929222538_毒霸看图.jpg
        img.setAttribute("src",response[i].showFile);
        // if(i%2==0)
        // img.setAttribute("src","img/孔王兴/渡：系列/微信图片_20181126202322_毒霸看图.jpg");
        // else
        // img.setAttribute("src","img/孔王兴/渡：系列/微信图片_20200929222538_毒霸看图.jpg");
        img.setAttribute("class","picture-test")
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
        likeButton.setAttribute("src","picture/heart.png");
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
        var nftContainer = document.getElementById("show")
        //alert(nftContainer.getAttribute("id"))
        nftContainer.appendChild(allThing);
    }
  });


  function like(nftId){
    var settings = {
        "url": "http://localhost:8080/userFunction/addLike",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "userId": localStorage.getItem("userId"),
          "nftId": nftId
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        alert("已将nft添加至“我喜欢");
        var likeButton = document.getElementsByName("heart");
        likeButton.firstChild.setAttribute("src","picture/redheart.png");
      });

  }


  
function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
    jsonLength++;
    }
    return jsonLength;
    }