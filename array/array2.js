var languages = ["C", "C++", "Java", "JavaScript", "PHP", "Python", "Ruby"];
console.log(languages);
languages.push("c#")
console.log(languages);
var removedelm = languages.pop()
console.log("removing...",removedelm);
console.log(languages);

languages.unshift("perl")
console.log(languages);
var removel1 = languages.shift()
console.log("removing...",removel1);
console.log(languages);

