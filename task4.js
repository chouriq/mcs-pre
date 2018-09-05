function reverseString(str) {
    let reversed = "";
    for (let i=str.length-1;i>=0;i--) {
        reversed += str[i];
    }
    return reversed;
}

let str = prompt("Give me some string:");
document.body.innerHTML = "<h3>I have reversed it: "+reverseString(str)+"</h3>";