function isLeap(year) {
    if (year%400==0) return true;
    if ((year%4==0)&&(year%100!=0)) return true;
    return false;
}

let year = prompt("Give me some year:");
let msg = "a leap year";
if (isLeap(Number(year))) msg = " is "+msg;
else msg = " is not "+msg;
document.body.innerHTML = "<h3> Year "+year+msg+"</h3>";