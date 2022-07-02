// ---------------------------------- About page ----------------------------------//
// TYPING ANIMATION

var typed = new Typed('.type', {
  strings: ['Web designer', 'Web developer', 'Photograher'],
  loop: true,
  typeSpeed: 80,
  backSpeed: 80,
});

// ---------------------------------- CONTACT PAGE ----------------------------------//
// FORM VALIDATION

function validation() {
  var name = document.getElementById('name').value;   //getting elements by their unique id's//
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var error_message = document.getElementById('error_message');

  error_message.style.padding = '10px';

  var text;
  if (name.length < 5) {                //limliting word count for name which should be greater than 5 otherwise an error message will be displayed//
    text = 'Please Enter valid Name';
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length != 10) { //assigning input variable as numeraic and limit word count to equals to 10 otherwise an error message will be displayed//
    text = 'Please Enter valid Phone Number';
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf('@') == -1 || email.length < 6) { //the input should contaian and "@" and word count must be less than 6 otherwise an error message will be displayed//
    text = 'Please Enter valid Email';
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 60) {
    text = 'Please Enter More Than 60 Characters'; //the word count of the message should be more 60 charcters otherwise an error message will be displayed//
    error_message.innerHTML = text;
    return false;
  }
  alert('Form Submitted Successfully!'); //the broswer will show a Form Submitted Successfully! message if the inputs are valid//
  return true;
}

//---------------------------------- BLOG PAGE ----------------------------------//
// READ MORE
function readMore() {
  var dots = document.getElementById('dots');      //getting elements by their unique id's//
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {   //giving function to the readmore button.//
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';   //giving function to the readless button.//
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}
