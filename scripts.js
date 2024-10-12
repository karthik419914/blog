// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollFunction(),myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// snackbar

function snackbar() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


// When the user scrolls down 50px from the top of the document, resize the header's font size


function scrollFunction() {
  if (document.body.scrollTop > 80|| document.documentElement.scrollTop > 80) {
    document.getElementById("rev_header").style.fontSize = "18px";
  } else {
    document.getElementById("rev_header").style.fontSize = "25px";
  }
}