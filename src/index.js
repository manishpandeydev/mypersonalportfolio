const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the href attribute of the link
    const href = link.getAttribute("href");

    // Set the hash of the URL to the href attribute of the link
    window.location.hash = href;

    // Reload the page
    window.location.reload();

    // Add the active class to the corresponding navbar item
    const activeLink = document.querySelector(`.nav-link[href='${href}']`);
    activeLink.classList.add("active");
  });
});

// Add the active class to the navbar item corresponding to the current hash
const currentHash = window.location.hash;
if (currentHash) {
  const activeLink = document.querySelector(`.nav-link[href='${currentHash}']`);
  activeLink.classList.add("active");
}

/*Contact form*/
const form = document.querySelector('#contact');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

/*form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields');
  } else {


    form.reset();
  }
});*/
function sendEmail(event) {
  event.preventDefault();
  var recipient = "susheelapandey742@gmail.com";
  var subject = "Message from my website";
  var body = document.getElementById("message").value;

  var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  window.open(mailtoLink);
}

var words = ["CONTACT MANISH PANDEY"];
var currentWordIndex = 0;
var currentLetterIndex = 0;
var typingEffect = document.getElementById("typing-effect");

function typeWords() {
  if (currentLetterIndex <= words[currentWordIndex].length) {
    typingEffect.textContent = words[currentWordIndex].substring(0, currentLetterIndex);
    currentLetterIndex++;
    setTimeout(typeWords, 100);
  } else {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    currentLetterIndex = 0;
    clearTimeout(typeWords,1000)
  }
}

typeWords();


