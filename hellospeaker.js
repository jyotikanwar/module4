(function(window){
var hellospeaker={};
greeting="Hello ";
hellospeaker.speak=function(name){
console.log(greeting+" "+name);
}
window.hellospeaker=hellospeaker;
})(window);