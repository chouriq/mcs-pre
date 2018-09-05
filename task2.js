function twoFer(name) {
    let msg = "One for ";
    if (name.length>0) {
        msg+=name;
    }
    else {
        msg+="you";
    }
    msg +=", one for me.";
    return msg;
}

let name = prompt("Give me your name:");

document.body.innerHTML = "<h3>"+twoFer(name)+"</h3>";