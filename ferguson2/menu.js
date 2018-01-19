$(document).ready(function(){
  $('.menu-trigger').click(function(){
    $('nav ul').slideToggle(500);
  });
  $(window).resize(function(){
    if ($(window).width()>500){
      $('nav ul').removeAttr('style');
    }
  });
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs(slideIndex += n);
}
function showDivs(n){
  var i;
  var x = document.getElementsByClassName("galleryphoto");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i=0; i < x.length; i++){
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display="block";
}
