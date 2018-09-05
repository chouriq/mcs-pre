const hey = message => {
    const str = message.trim();
    if (!str) {
      return 'Fine. Be that way!';
    }
  
    if ((str.match(/[a-z]+/i)) && (str.toUpperCase() === str)) {
      if (str.endsWith('?')) {
        return 'Calm down, I know what I\'m doing!';
      }
      else {
        return 'Whoa, chill out!';
      }
    }
    if (str.endsWith('?')) {
      return 'Sure.';
    }
    return 'Whatever.';
};
str = prompt("Ask Bob anything:");
document.body.innerHTML = "<h3>You: "+str+"</h3>";
document.body.innerHTML += "<h3>Bob: " +hey(str)+ "</h3>";