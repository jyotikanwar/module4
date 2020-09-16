(function(){
var names=["yakkov","john","jen","paul"];
for(var i=0;i<names.length;i++){
var firstname=names[i].charAt(0).toLowerCase();
   if(firstname==='j'){
       byespeaker.speak(names[i]);
     }
      else{
         hellospeaker.speak(names[i]);
        }
    }
 })();