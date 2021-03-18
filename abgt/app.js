// Storage
var daysLeft = document.querySelector(".Days");
var hour = document.querySelector(".hour")
var minute = document.querySelector('.minutes');
var second = document.querySelector('.seconds');
var expired = document.querySelector(".expired");

var countDownDate = new Date ("Aug 14,2021 00:00:00").getTime();


// CountDown

var timer = setInterval(function(){
  //grabbing current date and time
  var now = new Date().getTime();

  var distance = countDownDate - now;

  // here comes the Math lol
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // displaying the CountDOwn
  daysLeft.innerHTML = days  + "<br> Days"; 
  hour.innerHTML = hours+ ":"+minutes+ ":"+seconds;

  // Once Time expires display a quote
 if (distance < 0) {
    clearInterval(timer);
    expired.innerHTML = "See You On The Dance Floor";
    document.querySelector(".time-countdown").style.display = "none";
    document.querySelector(".day-countdown").style.display = "none";
  }
},1000)

