(function(window){
var byespeaker={};
var greeting="goodbye ";
byespeaker.speak=function(name){
console.log(greeting +" "+name);
}
window.byespeaker=byespeaker;
})(window);