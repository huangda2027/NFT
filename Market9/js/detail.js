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
    h22.innerHTML = response.authorName;

    var span1 = document.getElementsByClassName("price")[0];
    span1.innerHTML = response.nftPrice;

    var p1 = document.getElementsByClassName("nftid")[0];
    p1.innerHTML = response.nftId; 

    var owner = document.querySelector(".owner");
    owner.innerHTML = response.ownerName; 

    var p2 = document.getElementsByClassName("content-hide")[0];
    p2.innerHTML = "暂无";
    var p3 = document.getElementsByClassName("content-hide")[1];
    p3.innerHTML = "暂无";

    // if(IsCertificate == 1){

    // }
    var zspart = document.createElement("li");
    zspart.setAttribute("class","zs-part");
    var zsdiv = document.createElement("div");
    var label = document.createElement("label");
    label.innerHTML = "已通过鉴定机构审核";
    var zsbtn = document.createElement("button");
    var zsbtncb = document.createElement("button");
    var btnspan = document.createElement("span");
    btnspan.innerHTML = "查看证书";
    var btnspan2 = document.createElement("span");
    btnspan2.innerHTML = "检验证书"
    zsbtn.addEventListener("click",function(){
        zsArea.style.display = "flex";
    });
    zsbtn.appendChild(btnspan);
    zsbtncb.appendChild(btnspan2);
    zsbtn.setAttribute("class","zs-btn");
    zsbtncb.setAttribute("class","zs-btn cb");
    zsbtncb.setAttribute("onclick","verify("+response.nftId+")")
    zsdiv.appendChild(zsbtn);
    zsdiv.appendChild(zsbtncb);
    zspart.appendChild(label);
    zspart.appendChild(zsdiv);


    var infoContainer = document.querySelector(".info-container");
    infoContainer.appendChild(zspart);
            
    var id = document.createElement("p");
    id.innerHTML = "作品id："+nftId;
    var name = document.createElement("p");
    name.innerHTML = "作品名："+response.nftName
    var price = document.createElement("p");
    price.innerHTML = "价格："+response.nftPrice;
    var auther = document.createElement("p");
    auther.innerHTML = "作者："+response.authorName;
    var createTime = document.createElement("p");
    createTime.innerHTML = "作品诞生日期："+response.nftCreateAt;
});


var settings = {
    "url": "http://localhost:8080/CertificateFunction/SearchByNFTId?nftId="+nftId,
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
   var user = document.querySelector(".zs-user");
   var nftname = document.querySelector(".zs-nftname");
   var time = document.querySelector(".zs-time");
   var nftid = document.querySelector(".zs-nftid");
   var id = document.querySelector(".zs-id");
   var link = document.querySelector(".zs-link");
   var jg = document.querySelector(".zs-jg");
   user.innerHTML = response.owner;
   nftname.innerHTML = response.nftName;
   time.innerHTML = response.time;
   nftid.innerHTML = response.nftId;
   id.innerHTML = response.certificateId;
   link.innerHTML = response.txHash;
   jg.innerHTML = response.IssueOrg;

   var pic = document.querySelector(".pic");
   var img = document.createElement("img");
   img.setAttribute("src",response.showFile);
   pic.appendChild(img);
  });


//   function verify(nftId) {
//     var settings = {
//         "url": "http://localhost:8080/CertificateFunction/VerifyByNFTId?nftId="+nftId,
//         "method": "GET",
//         "timeout": 0,
//         };
//         //返回值
//         //response.result  1为验证成功，证书有效  -1为验证失败证书无效
//         $.ajax(settings).done(function (response) {
//             console.log(response);//
//             if(response.result == 1) {
//                 alert("证书有效");
//             }
//             else if(response.result == -1) {
//                 alert("证书无效");
//             }
//         });
// }