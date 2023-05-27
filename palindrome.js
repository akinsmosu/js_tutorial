//Adds 'reverse' to all strings
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}


//Defines a Phrase object
function Phrase(content){
  this.content = content;

  this.processor = function(string){
    return string.toLowerCase()
  }
  //Returns content processed for palindrome string
  this.processedContent = function processedContent(){
    return this.processor(this.content);
  }

  this.palindrome = function palindrome(){
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function Louder(){
    return content.toUpperCase();
  }
}

String.prototype.blank = function blank() {
  return !!(this.match(/^\s*$/g));
}

Array.prototype.last = function last() {
  return this.slice(-1);
}
