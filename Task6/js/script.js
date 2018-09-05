class Cipher {
    constructor(key) {
        this.alpha = 'abcdefghijklmnopqrstuvwxyz';
        if (!key) {
            this.key = '';
            for (let i=0;i<100;i++) {
                this.key += this.alpha.charAt(parseInt(Math.random()*26));
            }
        }
        else {
            let check;
            for (let i=0;i<key.length;i++) {
                check = false;
                for (let j=0;j<this.alpha.length;j++) {
                    if (key[i]==this.alpha[j]) {
                        check = true;
                        break;
                    }
                }
                if (!check) {
                    window.alert('Bad key');
                    throw new Error('Bad key');
                }
            }
            this.key=key;
        } 
    }

    encode(msg) {
        let encoded = '';
        let keyShift = 0;
        let shiftedValue = 0;
        for (let i=0;i<msg.length;i++) {
            keyShift = this.alpha.indexOf(this.key[i % this.key.length]);
            shiftedValue = (this.alpha.indexOf(msg[i]) + keyShift) % this.alpha.length;
            encoded += this.alpha.charAt(shiftedValue);
        }
        return encoded;
    }

    decode(msg) {
        let decoded = '';
        let keyShift = 0;
        let shiftedValue = 0;
        for (let i=0;i<msg.length;i++) {
            keyShift = this.alpha.indexOf(this.key[i % this.key.length]);
            shiftedValue = (this.alpha.indexOf(msg[i]) - keyShift + 26) % this.alpha.length;
            decoded += this.alpha.charAt(shiftedValue);
        }
        
       return decoded; 
    }
}
let str = prompt("Give me some key");
let cipher = new Cipher(str);
document.body.innerHTML = "<h3>Key is: "+cipher.key+"</h3>";

str = prompt("And a message:");
str2 = cipher.encode(str);
document.body.innerHTML += "<h3>Message is: "+str+"</h3>";
document.body.innerHTML += "<h3>Encoded is: "+str2+"</h3>";
document.body.innerHTML += "<h3>Decoded is: "+cipher.decode(str2)+"</h3>";
