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

// Typewriter function that handles HTML content
function typeWriter(element, html) {
    var i = 0;

    function type() {
        if (i < html.length) {
            // If the next character is part of an HTML tag (like <a>), skip over it correctly
            if (html.slice(i).startsWith("<")) {
                const endTag = html.indexOf(">", i); // Find the closing '>' of the tag
                element.innerHTML += html.slice(i, endTag + 1); // Add the full tag
                i = endTag + 1; // Skip over the tag
            } else {
                // Otherwise, add characters normally
                element.innerHTML += html.charAt(i);
                i++;
            }
            setTimeout(type, speed);
        }
    }
    type();
}

// Intersection Observer to trigger the effect when element is in view
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const html = element.getAttribute("data-content");

            if (!element.classList.contains('typed')) {
                typeWriter(element, html); // Start typewriter effect with HTML
                element.classList.add('typed'); // Prevent re-triggering
            }
        }
    });
}, { threshold: 0.28 });

// Clear the text and store the original HTML content for typewriter effect
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll(".typewriter"); // Select all elements with the class

    elements.forEach(function(element) {
        var html = element.innerHTML;
        element.setAttribute("data-content", html);
        element.innerHTML = ''; // Clear the text initially for the effect
        observer.observe(element); // Observe the element
    });
});
