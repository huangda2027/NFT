if(localStorage.getItem("userName")!=null){
    userName = localStorage.getItem("userName")
    
    var user = document.getElementsByClassName("login-btn")[1];
    console.log(user)
    user.innerHTML = userName;
    let dl = document.querySelector(".loginBtn");
    let ydl = document.querySelector(".loged");
    ydl.style.display = "block";
    dl.style.display = "none";
}