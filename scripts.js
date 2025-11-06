  // Countdown Timer Functionality
   const countdownDate = new Date("October 13, 2024 23:59:59").getTime();

   const x = setInterval(function () {
       const now = new Date().getTime();
       const distance = countdownDate - now;

       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

       document.getElementById("days").innerText = days;
       document.getElementById("hours").innerText = hours;
       document.getElementById("minutes").innerText = minutes;
       document.getElementById("seconds").innerText = seconds;

       if (distance < 0) {
           clearInterval(x);
           document.getElementById("countdown-timer").innerHTML = "Blog released";
       }
   }, 1000);


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

var speed = 16; // Speed in milliseconds

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
}, { threshold: 0.1 });

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

// Particle effect logic
function createParticles() {
  const particleContainer = document.querySelector('.particle-container');
  for (let i = 0; i < 34; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    // Scatter directions:
    const angle = Math.random() * 2 * Math.PI;
    const dist = 65 + 28 * Math.random();
    const x = Math.cos(angle) * dist;
    const y = Math.sin(angle) * dist * 0.95;
    particle.style.setProperty('--x', `${x}px`);
    particle.style.setProperty('--y', `${y}px`);
    particleContainer.appendChild(particle);
    setTimeout(() => {
      particle.remove();
    }, 1550);
  }
}

// MAIN logic
window.addEventListener('DOMContentLoaded', function() {
  createParticles();
  // Fade out after exactly 3 seconds
  setTimeout(function() {
    document.getElementById('loadingScreen').style.opacity = '0';
    setTimeout(function() {
      document.getElementById('loadingScreen').style.display = 'none';
      document.getElementById('mainContent').style.display = 'block';
    }, 1300); // Match the CSS fade-out
  }, 3000);
});
