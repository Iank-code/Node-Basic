const url = require("url");

const myUrl = new URL("http://mywebsite.com:8000/hello.html?id=100&status=active");

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (does not get p0rt)
console.log(myUrl.hostname);
