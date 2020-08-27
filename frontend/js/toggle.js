var x = document.getElementById("sign-up");
var y = document.getElementById("sign-in");
var a=document.getElementById("register-form");
var b=document.getElementById("login-form");
x.onclick = function () {
        b.style.display = "none";
        a.style.display = "block";
}
y.onclick = function () {
        a.style.display = "none";
        b.style.display = "block";
}