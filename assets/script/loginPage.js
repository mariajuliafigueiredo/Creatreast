function refresh(){
    window.location.reload();
}

function localStorageSave(){
    const username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    
    const password = document.getElementById("password").value;
    localStorage.setItem("password", password);


    document.getElementById("username").innerHTML = localStorage.username;
}