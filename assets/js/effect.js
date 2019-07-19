var i = 0;
var str = "System startup......" + "\n" + "Verifying account and password......" + "\n" + "The login system failed, please check account and password!";

function login() {
    var mydiv = document.getElementById("text");
    if (str.charAt(i) != '\n')
        mydiv.innerHTML += str.charAt(i);
    else
        mydiv.innerHTML += '<br/>';
    i++;
    var id = setTimeout(login, 30);
    if (i == str.length)
        clearTimeout(id);
}