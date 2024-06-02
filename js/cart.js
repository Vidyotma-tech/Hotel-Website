// alert(document.cookie);
const name_pattern = /^[a-zA-Z]{2,30}$/;
const mob_no_pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;;
const email_pattern =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

var cookie_arr = document.cookie.substring(14).split("|");
var booking_dets = new Object();

var key_val;
for(var i = 0; i<5; i++){
    key_val = cookie_arr[i].split(":");
    booking_dets[key_val[0]] = key_val[1];
}

key_val = cookie_arr[5].split("*");
var add_on_obj = JSON.parse(key_val[1]);
// alert(add_on_obj.yoga);

var total_bill = parseFloat(booking_dets.room_cost);

for (var key in add_on_obj) {
    if (!add_on_obj.hasOwnProperty(key)) continue;
    total_bill += parseInt(add_on_obj[key],10);
}

console.log(total_bill);

$('#stay_dur').html("<b>Stay Durationn: </b>"+ booking_dets.stay_start+" - "+ booking_dets.stay_end);
$('#no_of_guests').html("<b>No. of Guests:</b> "+booking_dets.no_of_guest);

$('#room_type').text(booking_dets.room_type);
$('#room_type_pc').text("₹"+booking_dets.room_cost);

var tax = total_bill*0.18;
$('#tax_pc').text("₹"+tax+".00");

var service_type_str ="";
var service_type_pc_str= "" ;
for (var key in add_on_obj) {
    if (!add_on_obj.hasOwnProperty(key)) continue;
        service_type_str+=key+"<br>";
        service_type_pc_str += "₹"+ add_on_obj[key]+".00"+"<br>";
}

$('#service_type').html(service_type_str);
$('#service_type_pc').html(service_type_pc_str);


total_bill = parseFloat(tax) + parseFloat(total_bill);
$('#total_amt').text("₹"+total_bill+".00");

$('input').on('blur', function(){
    validate($(this));

});

function validate(obj){
    if (obj.val().trim() == "") {
        obj.css({'border-style':'solid' ,'border-width':'1px', 'border-color' : 'red'});
        // display error
        return false;
    }
    else{

        switch(obj.attr('name'))
        {
            case "first_name" :
                                if(validate_name(obj.val().trim()) ){
                                     obj.css({'border': 'none'});
                                     $('#fname_err').css({'display' : 'none'});
                                     return true;
                                }
                                else{
                                    obj.css({'border-style':'solid' ,'border-width':'1px', 'border-color' : 'red'});
                                    $('#fname_err').css({'display' : 'block'});
                                    return false;
                                }
                                break;
            case "last_name" :  if( validate_name(obj.val().trim() ) ){
                                     obj.css({'border': 'none'});
                                     $('#lname_err').css({'display' : 'none'});
                                     return true;
                                }
                                else{
                                    obj.css({'border-style':'solid' ,'border-width':'1px', 'border-color' : 'red'});
                                     $('#lname_err').css({'display' : 'block'});
                                     return false;
                                }
                                break;
            case "phone_no" :    if(  validate_phone_no(obj.val().trim()) ){
                                     obj.css({'border': 'none'});
                                     $('#mobno_err').css({'display' : 'none'});
                                     return true;
                                }
                                else{
                                    obj.css({'border-style':'solid' ,'border-width':'1px', 'border-color' : 'red'});
                                    $('#mobno_err').css({'display' : 'block'});
                                    return false;
                                }
                                break;
            case "email_id" :    if(  validate_email_id(obj.val().trim()) ){
                                     obj.css({'border': 'none'});
                                     $('#email_err').css({'display' : 'none'});
                                     return true;
                                }
                                else{
                                    obj.css({'border-style':'solid' ,'border-width':'1px', 'border-color' : 'red'});
                                    $('#email_err').css({'display' : 'block'});
                                    return false;
                                }
                                break;

            case "card_number":  if(    validate_card_no(obj.val().trim() )){
                                     obj.css({'border': 'none'});
                                     $('#cardno_err').css({'display' : 'none'});
                                     return true;
                                }
                                else{
                                    obj.css({'border-style':'solid' ,'border-width':'1px', 'border-color' : 'red'});
                                    $('#cardno_err').css({'display' : 'block'});
                                    return false;
                                }
                                break;
            case "card_name":    if(  validate_name(obj.val().trim() )){
                                     obj.css({'border': 'none'});
                                     $('#cardname_err').css({'display' : 'none'});
                                     return true;
                                }
                                else{
                                    obj.css({'border-style':'solid' ,'border-width':'1px', 'border-color' : 'red'});
                                    $('#cardname_err ').css({'display' : 'block'});
                                    return false;
                                }
                                break;
            default: return true;
        }
    }
}

function validate_name(user_input){
    return name_pattern.test(user_input);
}

function validate_phone_no(user_input){
    return mob_no_pattern.test(user_input);}

function validate_email_id(user_input){
    return email_pattern.test(user_input);
}


function validate_card_no(user_input){
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    var isValid = false;

    if (visaRegEx.test(user_input)) {
        isValid = true;
    }
    else if(mastercardRegEx.test(user_input)) {
        isValid = true;
    }
    else if(amexpRegEx.test(user_input)) {
        isValid = true;
    }
    else if(discovRegEx.test(user_input)) {
        isValid = true;
    }

    return isValid;
}

$('select').on('blur', function(){
    validate_select($(this));
});

function validate_select(obj){
    if(obj.value == "place_holder") {
        obj.css({'border-style':'solid' ,'border-width':'1px', 'border-color' : 'red'});
        return false;
        // $('#expdt_err ').css({'display' : 'block'});
    }
    else{

        obj.css({'border': 'none'});
        var flag = true;
        // $('#expdt_err').css({'display' : 'none'});

        if($('#card_exp_mon').val() != "place_holder" && $('#card_exp_yr').val() != "place_holder"){
            if(validate_expdate()){
                obj.css({'border': 'none'});
                $('#expdt_err').css({'display' : 'none'});
                flag = true;
            }
            else{
                obj.css({'border-style':'solid' ,'border-width':'1px', 'border-color' : 'red'});
                $('#expdt_err').css({'display' : 'block'});
                flag = false;
            }
        }
        return flag;
    }
}

function validate_expdate(){
    var user_card_mon = $('#card_exp_mon').val();
    var user_card_yr =  $('#card_exp_yr').val();
    var user_card_expdate = new Date(user_card_yr, user_card_mon);


    var cur_date = new Date();
    // suppose booking is next month
    var user_booking  = new Date(cur_date.getFullYear(), cur_date.getMonth()+1, cur_date.getDate());

    if(user_card_expdate>=user_booking){
        return true;
    }
    else{
        return false;
    }
}



$('#cmp_booking').on('click', function(e){
    // e.preventDefault();
    var can_submit = true;

    $('input').each(function(){
        if(validate($(this) ) == true ){
            if(can_submit == true){
                can_submit = true;
            }
            else{
                alert("here1");
                can_submit = false;
            }
        }
        else{
            alert("here2");
            can_submit = false;
        }
    });


    $('select').each(function(){
        if(validate($(this)  ) == true){
            if(can_submit == true){
                can_submit = true;
            }
            else{
                can_submit = false;
            }
        }
        else{
            can_submit = false;
        }
    });

    if(!$('#acknow_chk').is(":checked")){
        $('#acknow_err').css({'display' : 'block'});
        can_submit = false;
    }
    else{
        $('#acknow_err').css({'display' : 'none'});
        if(can_submit == true){
            can_submit = true;
        }
        else{
            can_submit = false;
        }
    }


  if (can_submit) {
    var BookingDetails = {
      'first_name' : $('#first_name').val(),
      'last_name' : $('#last_name').val(),
      'mobile_no' : $('#phone_no').val(),
      'email_id' : $('#email_id').val(),
      'card_number' : $('#card_number').val(),
      'card_name' : $('#card_name').val(),
      'card_exp_mon': $('#card_exp_mon').val(),
      'card_exp_yr': $('#card_exp_yr').val(),
      'stay_start': booking_dets.stay_start,
      'stay_end': booking_dets.stay_end,
      'no_of_guest': booking_dets.no_of_guest,
      'room_type': booking_dets.room_type,
      'add_on_ser': JSON.stringify(add_on_obj),
      'total_bill': total_bill
    };
    // alert(BookingDetails);

    console.log(BookingDetails);


    var JSON_BookingDetails = JSON.stringify(BookingDetails);
    console.log(JSON_BookingDetails);
  }
  else{
    e.preventDefault();
  }

});
