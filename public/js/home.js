//when reload page
window.addEventListener("load", function(){
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});


//hide navbar when scroll down, show navbar when scroll up
var prevScrollpos = window.scrollY || document.documentElement.scrollTop;
window.onscroll = function() {
var currentScrollPos = window.scrollY || document.documentElement.scrollTop;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("header").style.top = "0";
} else {
  document.getElementById("header").style.top = "-100px";
}
prevScrollpos = currentScrollPos;
};

