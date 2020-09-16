(function(window){
var byespeaker={};
var greeting="Good Bye ";
byespeaker.speak=function(name){
console.log(greeting +" "+name);
}
window.byespeaker=byespeaker;
})(window);