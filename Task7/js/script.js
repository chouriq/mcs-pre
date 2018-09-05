function isPangram(sentence) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let num = 0;
    const string = sentence.toLowerCase();
    if (!sentence) return false;
    for (let i in alpha) {
        for (let j in string) {
            if (alpha[i]==string[j]) {
                num++;
                break;
            }
        }
    }
    if (num==alpha.length) return true;
    return false;
}
str = prompt("Print anything and we will find if it is a pangram:");
document.body.innerHTML = "<h3>The string: "+str+"</h3>";
if (isPangram(str)) {
    document.body.innerHTML += "<h3> is a Pangram </h3>";
}
else document.body.innerHTML += "<h3> is not a Pangram </h3>";