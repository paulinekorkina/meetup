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
