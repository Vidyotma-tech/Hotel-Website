// top-bar background slide
var imgArr = ["bg111.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg"];
var i=0;

setInterval(changeBgImage,5000);

function changeBgImage(){
  document.getElementById("top-bar").style.backgroundImage = "url(images/"+imgArr[i+1]+")";
  // $("#top-bar").css('background-image','url(images/'+imgArr[i+1]+')');
  i++;
  if(i==4){
    i=-1;
  }
}



// view full gallery popup
var popupImg = ["popup1.jpg","popup2.jpg","popup3.jpg","popup4.jpg","popup5.jpg","popup6.jpg","popup7.jpg","popup8.jpg","popup9.jpg","popup10.jpg"];
var slideIndex = 0;
$(".popup-btn").click(function(){
  $("#popup").css('display','block');
})

$(".popup-prev").click(prevImg);
$(".popup-next").click(nextImg);

// on click left btn
function prevImg(){
  if(slideIndex==0){
    slideIndex = popupImg.length-1;
    $(".popup-img").attr('src','images/'+popupImg[slideIndex]);
  }
  else{
    $(".popup-img").attr('src','images/'+popupImg[slideIndex-1]);
    slideIndex--;
  }
}

// on click right btn
function nextImg(){
  if(slideIndex==popupImg.length-1){
    slideIndex = 0;
    $(".popup-img").attr('src','images/'+popupImg[slideIndex]);
  }
  else{
    $(".popup-img").attr('src','images/'+popupImg[slideIndex+1]);
    slideIndex++;
  }
}

//on click close button
$(".popup-close-btn").click(function(){
  $("#popup").css('display','none');
})



// on arrow key press
$("body").on("keydown", function(event){
  // alert("hello");
  if(event.keyCode=='37'){                        //pressed left arrow key
    if(slideIndex==0){
      slideIndex = popupImg.length-1;
      $(".popup-img").attr('src','images/'+popupImg[slideIndex]);
    }
    else{
      $(".popup-img").attr('src','images/'+popupImg[slideIndex-1]);
      slideIndex--;
    }
  }

  else if(event.keyCode=='39'){                      //pressed right arrow key
    if(slideIndex==popupImg.length-1){
      slideIndex = 0;
      $(".popup-img").attr('src','images/'+popupImg[slideIndex]);
    }
    else{
      $(".popup-img").attr('src','images/'+popupImg[slideIndex+1]);
      slideIndex++;
    }
  }

});
