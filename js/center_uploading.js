function jump(){
    var formdata = new FormData($("#myForm")[0]);
    $.ajax({
    type:"POST",
    dataType:"json",
    url:" http://localhost:8080/NFTFunction/uploading",
    data:formdata,
    async:false,
    cache:false,  
    contentType:false,
    processData:false,
    "xhrFields": {
        withCredentials: true
    },
    headers:{
   "Authorization": localStorage.getItem("JWT")
    },
    success:function(msg){
        if(msg){
            alert("文件上传");
         console.log(msg)
         console.log(msg.showFile) //取出返回json串中所需要的元素，例如showFile
         alert(msg.showFile)
        }
    }
})
}

function mint(name,hash,price){
    var settings = {
        "url": "http://cloud.potat0.cc:24802/mint",
        "method": "POST",
        "timeout": 0,
        "headers": {
        "Content-Type": "application/json",
        "Authorization":'{"version":3,"id":"7cf78ea8-ebd1-4fe5-92d9-d77ce6ac9cdb","address":"59b534adc54a79d20d07d379383bbfc8306fe93b","crypto":{"ciphertext":"eb3d5a688144727971ec787d47cc69c69186143845c6c0f759c9efe44d5dd47e","cipherparams":{"iv":"00b054f71bac52fc7bc9b06d01bff5c1"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"47d818c860f2d6ff6da48087f420b6d1d3fa8330d6bddff2d93ad92631462be5","n":8192,"r":8,"p":1},"mac":"e03638d378bb0c704490252d40310728e90281a4b560b23a8ff4ade4e9da4a27"}}',
        "code": "zyl7758258"
        },
        "data": JSON.stringify({
        "name": name,
        "hash": hash,
        "price": price,
     

        }),
        };

        $.ajax(settings).done(function (response) {
        
        console.log(response);
        alert("上传成功！");
        });
}

function getBalance(){
    var settings = {
        "url": "http://cloud.potat0.cc:24802/balanceOf",
        //"url": "127.0.0.1:3002/balanceOf",
        "method": "GET",
        "timeout": 0,
        "headers": {
        "Content-Type": "application/json",
        "Authorization":'{"version":3,"id":"7cf78ea8-ebd1-4fe5-92d9-d77ce6ac9cdb","address":"59b534adc54a79d20d07d379383bbfc8306fe93b","crypto":{"ciphertext":"eb3d5a688144727971ec787d47cc69c69186143845c6c0f759c9efe44d5dd47e","cipherparams":{"iv":"00b054f71bac52fc7bc9b06d01bff5c1"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"47d818c860f2d6ff6da48087f420b6d1d3fa8330d6bddff2d93ad92631462be5","n":8192,"r":8,"p":1},"mac":"e03638d378bb0c704490252d40310728e90281a4b560b23a8ff4ade4e9da4a27"}}',
        "code": "zyl7758258"
        },

        };

        $.ajax(settings).done(function (response) {
        console.log(response);
        alert(response.balance)
        });
}