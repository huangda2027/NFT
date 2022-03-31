var nftId = localStorage.getItem("inforId")
var settings = {
    "url": "http://localhost:8080/NFTFunction/searchNFTById?nftId="+nftId,
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    console.log(response);
            
    var img = document.createElement("img");
    img.setAttribute("src",response.showFile);
    var antImg = document.getElementsByClassName("ant-img")[0];
    antImg.appendChild(img);
    var img2 = document.createElement("img");
    img2.setAttribute("src",response.showFile);
    var imgContainer = document.querySelector(".side-img");
    imgContainer.appendChild(img2);

    var h21 = document.getElementsByClassName("break-all")[0];
    var h22 = document.getElementsByClassName("break-all")[1];
    h21.innerHTML = response.nftName;
    h22.innerHTML = nftUploaderId;

    var span1 = document.getElementsByClassName("price")[0];
    span1.innerHTML = response.nftPrice;

    var p1 = document.getElementsByClassName("nftid")[0];
    p1.innerHTML = response.nftId; 

    var p2 = document.getElementsByClassName("content-hide")[0];
    p2.innerHTML = "暂无";
    var p3 = document.getElementsByClassName("content-hide")[1];
    p3.innerHTML = "暂无";
            
    var id = document.createElement("p");
    id.innerHTML = "作品id："+nftId;
    var name = document.createElement("p");
    name.innerHTML = "作品名："+response.nftName
    var price = document.createElement("p");
    price.innerHTML = "价格："+response.nftPrice;
    var auther = document.createElement("p");
    auther.innerHTML = "作者："+response.nftUploaderId;
    var createTime = document.createElement("p");
    createTime.innerHTML = "作品诞生日期："+response.nftCreateAt;
});