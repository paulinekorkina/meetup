var showMap = document.querySelector(".view-map-btn");
var addressWindow = document.querySelector(".address-wrap");
var closeMap = document.querySelector(".btn-show");

showMap.addEventListener("click", function (event) {
  event.preventDefault();
  addressWindow.classList.add("address-wrap-hidden");
});

closeMap.addEventListener("click", function (event) {
  event.preventDefault();
  addressWindow.classList.remove("address-wrap-hidden");
});

var updownElem = document.getElementById('updown');
var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'up':
      pageYLabel = pageY;
      window.scrollTo(0, 0);
      this.className = 'down';
      break;

    case 'down':
      window.scrollTo(0, pageYLabel);
      this.className = 'up';
  }
}

window.onscroll = function() {

  var pageY = window.pageYOffset || document.documentElement.scrollTop;
  var innerHeight = document.documentElement.clientHeight;

  switch (updownElem.className) {
    case '':
      if (pageY > innerHeight) {
        updownElem.className = 'up';
      }
      break;

    case 'up':
      if (pageY < innerHeight) {
        updownElem.className = '';
      }
      break;

    case 'down':
      if (pageY > innerHeight) {
        updownElem.className = 'up';
      }
      break;

  }
}

function get_timer_652(string_652) {
  var date_new_652 = string_652;
  var date_t_652 = new Date(date_new_652);
  var date_652 = new Date();
  var timer_652 = date_t_652 - date_652;

  if(date_t_652 > date_652) {
    var day_652 = parseInt(timer_652/(60*60*1000*24));

    if(day_652 < 10) {day_652 = "0" + day_652;}day_652 = day_652.toString();
      var hour_652 = parseInt(timer_652/(60*60*1000))%24;

    if(hour_652 < 10) {hour_652 = "0" + hour_652;}hour_652 = hour_652.toString();
      var min_652 = parseInt(timer_652/(1000*60))%60;

    if(min_652 < 10) {min_652 = "0" + min_652;}min_652 = min_652.toString();var sec_652 = parseInt(timer_652/1000)%60;

    if(sec_652 < 10) {sec_652 = "0" + sec_652;}
      sec_652 = sec_652.toString(); timethis_652 = day_652 + " : " + hour_652 + " : " + min_652 + " : " + sec_652;
      $(".result-day").text(day_652);
      $(".result-hour").text(hour_652);
      $(".result-minute").text(min_652);
      $(".result-second").text(sec_652);}

  else {
    $(".result-day").text("00");
    $(".result-hour").text("00");
    $(".result-minute").text("00");
    $(".result-second").text("00");}
  }

  function getfrominputs_652(){string_652 = "05/03/2017 00:00"; get_timer_652(string_652);setInterval(function(){get_timer_652(string_652);},1000);}$(document).ready(function(){ getfrominputs_652();});

