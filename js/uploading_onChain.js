
        var nftId = localStorage.getItem("sycId")
        alert(nftId)
        //var nftId = 307;


function syc(){
    var authorization = document.getElementById("Authorization").value;
    var code = document.getElementById("code").value;
    //alert(localStorage.getItem("sycId"))
    alert(authorization)
    alert(code)
    //var authorization = '{"version":3,"id":"7cf78ea8-ebd1-4fe5-92d9-d77ce6ac9cdb","address":"59b534adc54a79d20d07d379383bbfc8306fe93b","crypto":{"ciphertext":"eb3d5a688144727971ec787d47cc69c69186143845c6c0f759c9efe44d5dd47e","cipherparams":{"iv":"00b054f71bac52fc7bc9b06d01bff5c1"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"47d818c860f2d6ff6da48087f420b6d1d3fa8330d6bddff2d93ad92631462be5","n":8192,"r":8,"p":1},"mac":"e03638d378bb0c704490252d40310728e90281a4b560b23a8ff4ade4e9da4a27"}}';
    var settings = {
        "url": "http://localhost:8080/NFTFunction/uploadingOnChain",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "nftId": nftId,
            "authorization": authorization,
            //"code": "zyl7758258",
            "code": code
            }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
