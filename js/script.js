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
