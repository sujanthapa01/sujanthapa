// Function to open the modal
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  document.body.classList.add("blur"); // Add blur class to the body
}

// Function to close the modal
function closeModalFunc() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  modal.classList.add("popOut");
  document.body.classList.remove("blur"); // Remove blur class from the body
}

// Close the modal if the user clicks outside of it
window.addEventListener("click", function (e) {
  var modal = document.getElementById("myModal");
  if (e.target === modal) {
    closeModalFunc();
  }
});

// Select the SVG buttons and navbar
const menuSvgButton = document.querySelector(".menu-svg-button");
const closeSvgButton = document.querySelector(".close-svg-button");
const navbar = document.querySelector(".navbar");

// Function to add the "active" class to the navbar
const AddNavbarActiveClass = () => {
  navbar.classList.add("active");
};

// Function to remove the "active" class from the navbar
const RemoveNavbarActiveClass = () => {
  navbar.classList.remove("active");
};

// Add a click event listener to the menu-svg-button to add the "active" class
menuSvgButton.addEventListener("click", () => {
  AddNavbarActiveClass();
});

// Add a click event listener to the close-svg-button to remove the "active" class
closeSvgButton.addEventListener("click", () => {
  RemoveNavbarActiveClass();
});

// audio function

const playPauseButton = document.querySelector('.play-pause');
const audio = document.getElementById('audio');
let isPlaying = false;

audio.addEventListener('ended', () => {
    playPauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon-play" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path d="M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z" /></svg>';
    isPlaying = false;
});

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon-play" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path d="M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z" /></svg>';
    } else {
        audio.play();
        playPauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon-pause" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 192v128M304 192v128"/></svg>';
    }
    isPlaying = !isPlaying;
}