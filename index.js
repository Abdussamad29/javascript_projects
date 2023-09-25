

let audio;
 let all = document.querySelector("#one")
 let second = document.querySelector("#two")
 let third = document.querySelector("#three")
 let drum = document.querySelectorAll(".drum")
 let two;

 drum.forEach(function(handle){
   handle.addEventListener('click',function(e){
      
      
      if(e.target.id==='one'){
         audio = new Audio("sounds/snare.mp3")
         audio.play()
      }
     
   else  if(e.target.id=="two"){
         audio = new Audio("sounds/crash.mp3")
         audio.play()
      }
   else  if(e.target.id==="three"){
         audio = new Audio("sounds/kick-bass.mp3")
         audio.play()
      }
      else  if(e.target.id==="four"){
         audio = new Audio("sounds/tom-2.mp3")
         audio.play()
      }
     else if(e.target.id==="five"){
      audio = new Audio("sounds/tom-3.mp3")
         audio.play()
     }
     else if(e.target.id==="six"){
      audio = new Audio("sounds/tom-4.mp3")
         audio.play()
     }
     else if(e.target.id==="seven"){
      audio = new Audio("sounds/tom-1.mp3")
         audio.play()
     }
   })
 })



 
