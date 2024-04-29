document.getElementById("load-more-btn").addEventListener("click", function() {
    // Add more items to the container
    const container = document.querySelector(".buyproducts");
    for (let i = 0; i < 3; i++) { // Adding 3 items at a time, adjust as needed
      const newItem = document.createElement("div");
      newItem.classList.add("card");
      newItem.textContent = "New Item " + (container.children.length + 1);
      container.appendChild(newItem);
    }
  });
  
  // Get the content div
const contentDiv = document.getElementById('content');

// Function to resize font size
function resizeText() {
    const maxWidth = contentDiv.offsetWidth; // Get the width of the div
    const text = contentDiv.textContent; // Get the text content of the div
    let fontSize = 20; // Initial font size

    // Create a temporary span element to measure text width
    const span = document.createElement('span');
    span.style.fontSize = fontSize + 'px';
    span.style.visibility = 'hidden';
    span.textContent = text;
    document.body.appendChild(span);

    // Adjust font size until text fits within div width
    while (span.offsetWidth > maxWidth && fontSize > 10) {
        fontSize--;
        span.style.fontSize = fontSize + 'px';
    }

    // Set the font size of the content div
    contentDiv.style.fontSize = fontSize + 'px';

    // Remove the temporary span element
    document.body.removeChild(span);
}

// Resize text when the window is resized
window.addEventListener('resize', resizeText);

// Initial resize
resizeText();


window.onscroll = function() {stickyTitle()};

var header = document.querySelector('.header');
var title = document.getElementById("title");
var sticky = header.offsetTop;

function stickyTitle() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    title.style.top = "0";
  } else {
    header.classList.remove("sticky");
    title.style.top = null;
  }
}

function hideIcon() {
  var icon = document.getElementById("icon");
  icon.style.display = "none";
}
function hideIcon2() {
  var icon = document.getElementById("icon2");
  icon.style.display = "none";
}
