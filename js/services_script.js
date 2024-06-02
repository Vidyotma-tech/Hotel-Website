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

function prevImg(){
  if(slideIndex==0){
    $(".popup-img").attr('src','images/'+popupImg[slideIndex]);
  }
  else{
    $(".popup-img").attr('src','images/'+popupImg[slideIndex-1]);
    slideIndex--;
  }
}

function nextImg(){
  if(slideIndex==popupImg.length-1){
    $(".popup-img").attr('src','images/'+popupImg[slideIndex]);
  }
  else{
    $(".popup-img").attr('src','images/'+popupImg[slideIndex+1]);
    slideIndex++;
  }
}

$(".popup-close-btn").click(function(){
  $("#popup").css('display','none');
});




const track = document.querySelector('.carousel_track');	// the list of images
// console.log(track);
// console.log(track.children);
const slide_arr = Array.from(track.children);
const lbtn = document.querySelector('.carousel_lbtn');
const rbtn = document.querySelector('.carousel_rbtn');
const carousel_nav = document.querySelector('.carousel_nav');
const dots_arr = Array.from(carousel_nav.children);

const slideWidth = slide_arr[0].getBoundingClientRect().width;

slide_arr.forEach((slide, index) =>{
	slide.style.left= index*slideWidth+"px";
});


// ----------------------------------

function moveToSlide(track, current_slide, target_slide){
	track.style.transform = "translateX(-"+target_slide.style.left+")";
	current_slide.classList.remove('current_slide');
	target_slide.classList.add('current_slide');
}

// Left button
lbtn.addEventListener('click', e =>{

	const current_slide = track.querySelector('.current_slide');
	const prev_slide = current_slide.previousElementSibling;
	// alert(prev_slide.style.left);
	moveToSlide(track, current_slide, prev_slide);
	const current_dot = carousel_nav.querySelector('.current_slide');
	target_dot = current_dot.previousElementSibling;
	update_navBar(current_dot, target_dot);
});




// right btn
rbtn.addEventListener('click', e =>{
	const current_slide = track.querySelector('.current_slide');
	const next_slide = current_slide.nextElementSibling;
	// alert(next_slide.style.left);
	moveToSlide(track, current_slide, next_slide);

	const current_dot = carousel_nav.querySelector('.current_slide');
	target_dot = current_dot.nextElementSibling;
	update_navBar(current_dot, target_dot);
});

// ---------------------


// navigation button

function update_navBar(current_dot, target_dot){
	current_dot.classList.remove('current_slide');
	target_dot.classList.add('current_slide');
}

carousel_nav.addEventListener('click', e=>{
	const target_dot = e.target.closest('button');

	if (target_dot != null) {
		const current_slide = track.querySelector('.current_slide');
		const current_dot = carousel_nav.querySelector('.current_slide');

		const target_index = dots_arr.findIndex(dot => dot === target_dot);
		const target_slide = slide_arr[target_index];

		moveToSlide(track, current_slide, target_slide);
		update_navBar(current_dot, target_dot);

	}

});


var add_ser = new Object();

$('.add_pkg').on('click', function(e){
	var temp = $(this).val().split(":");
	add_ser[temp[0]] = temp[1];
	var ch = confirm("Do you want to add more services to your package?");
	if (ch != true) {
		var booking_data = "stay_start:Thu, Oct 21, 2021|stay_end:Sun, Oct 24, 2021|no_of_guest:2 Adults 1 Child|room_type:President Suite|room_cost:103000.00";
		booking_data = booking_data+"|add_on_ser*";

		booking_data = booking_data + JSON.stringify(add_ser);
		document.cookie = "booking_data: "+booking_data;
		// alert("booking_data");
		console.log(booking_data);
		console.log(document.cookie);
		window.location.href = "cart.html";
	}
});
