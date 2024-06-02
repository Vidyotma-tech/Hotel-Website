var status = " ";
//first Name
$('input[name="firstName"]').on('blur',function(){
  if(this.value.trim().length == 0){
    $(this).addClass("error");
    status = "notok";
  }
  else{
    $(this).removeClass("error");
    status = "ok1";
  }
});

//Last Name

$('input[name="lastName"]').on('blur',function(){
  if(this.value.length == 0){
    $(this).addClass("error");
  }
  else{
    $(this).removeClass("error");
    status = "ok2";
  }
});

//Password

var re1 = /[0-9]/;
var re2 = /[A-Z]/;
$('input[name="password"]').on('blur',function(){
  if(this.value.length < 8 || this.value.length > 20){
    $(".msg")[0].setAttribute('style',"visibility: visible;");
    $(this).addClass("error");
  }
  else{
    $(this).removeClass("error");
    $(".msg")[0].setAttribute('style',"visibility: hidden;");
    status = "ok2";
  }

  if(!re1.test(this.value)){
    $(".msg1")[0].style.visibility= "visible";
  }
  else{
    $(".msg1")[0].style.visibility= "hidden";
    status = "ok3";
  }

  if(!re2.test(this.value)){
    $(".msg2")[0].style.visibility= "visible";
  }
  else{
    // $(".msg2")[0].prepend("✅");
    $(".msg2")[0].style.visibility= "hidden";
    status = "ok5";
  }
});
//Email ID

var re3 = /^\w+@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  //checking email format
$('input[name="Email"]').on('blur',function(){
  if(!re3.test(this.value)){
    $(".msg3")[0].style.visibility= "visible";
    $(this).addClass("error");
  }
  else{

    $(this).removeClass("error");
      $(".msg3")[0].style.visibility= "hidden";
      status = "ok4";
  }
});

// var togglePassword = $('#togglePassword');
  // const password = $('input[name="password"]');
  $('.togglePassword')[0].addEventListener('click',function(){
    // toggle the type attribute
    const type = $('input[name="password"]')[0].getAttribute('type') === 'password' ? 'text' : 'password';
  $('input[name="password"]')[0].setAttribute('type', type);
    // toggle the eye slash icon
    // this.classList.toggle('fas fa-eye-slash');
});



$("#submitBtn").on('click',function(e){
  e.preventDefault();

  if( checkvalidation()){
    $("#popup").css('display','block');
  }  

  $(".popup-close-btn").click(function(){
    $("#popup").css('display','none');

  });

});


function checkvalidation(){
  if( $('input[name="firstName"]').val().trim().length != 0 && 
    $('input[name="lastName"]').val().trim().length != 0 && 
    re3.test($('input[name="Email"]').val()) && 
    $('input[name="password"]').val().length > 8 && 
    $('input[name="password"]').val().length < 20 &&
    re1.test($('input[name="password"]').val()) && 
    re2.test($('input[name="password"]').val())){
    return true;
  }
  else{
    return false;
  }
}