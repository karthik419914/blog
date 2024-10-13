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

var speed = 50; // Speed in milliseconds

// Function to apply the typewriter effect to an element
function typeWriter(element, txt) {
    var i = 0;
    function type() {
        if (i < txt.length) {
            element.innerHTML += txt.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Intersection Observer to detect scrolling into the section
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const text = element.getAttribute("data-content");

            if (!element.classList.contains('typed')) {
                typeWriter(element, text); // Start typewriter effect
                element.classList.add('typed'); // Mark as typed to prevent re-triggering
            }
        }
    });
}, { threshold: 0.35 });

// Store the text for each target element in a data-content attribute and clear the innerHTML
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll("#demo");

    elements.forEach(function(element) {
        var text = element.innerHTML;
        element.setAttribute("data-content", text);
        element.innerHTML = ''; // Clear the text initially for the effect
        observer.observe(element); // Observe each element
    });
});
