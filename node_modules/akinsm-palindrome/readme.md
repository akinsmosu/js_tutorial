#Phrase object (with palindrome detector)
---
This is a sample NPM module created in *Learn Enough JavaScript to be Dangerous* by Michael Hartl.

The module can be used as follows:

```
$ npm install --global akinsm-palindrome
$ vim test.js
let Phrase = require("akinsm-palindrome");
let napoleansLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleansLament.palindrome());
$node test.js
true
```
