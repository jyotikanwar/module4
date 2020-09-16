(function(window){
var hellospeaker={};
greeting="hello ";
hellospeaker.speak=function(name){
console.log(greeting+" "+name);
}
window.hellospeaker=hellospeaker;
})(window);