var nftId = localStorage.getItem("inforId");

function verify() {
    var settings = {
        "url": "http://localhost:8080/CertificateFunction/VerifyByNFTId?nftId=" + nftId,
        "method": "post",
        "xhrFields": {
            withCredentials: true
        },
        "timeout": 0,
    };
    //返回值
    //response.result  1为验证成功，证书有效  -1为验证失败证书无效
    $.ajax(settings).done(function (response) {
        console.log(response);//
        if (response.result == 1) {
            alert("证书有效");
        }
        else if (response.result == -1) {
            alert("证书无效");
        }
    });
}