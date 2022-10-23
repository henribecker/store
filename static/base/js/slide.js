let count = 1;
document.getElementById("baner1").checked = true;

setInterval(function () {
    nextImage();
}, 4000)

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("baner" + count).checked = true;
}

var scrol = $('.cards').get(0).scrollLeftMax

$(".next").click(function(){
   let max = $(".cards")
   if(max.get(0).scrollLeft === 0 ){
        max.scrollLeft(500);
   }else if (max.get(0).scrollLeft < scrol) {
        max.scrollLeft((max.get(0).scrollLeft + 500))
    
   } else {
    
   }
 });
 $(".left").click(function(){
    let max = $(".cards")
    if(max.get(0).scrollLeft === scrol ){
         max.scrollLeft((max.get(0).scrollLeft - 500));
    }else if (max.get(0).scrollLeft > 0) {
         max.scrollLeft((max.get(0).scrollLeft - 500))
     
    } else {
     
    }
  });  