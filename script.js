// Creating stars dynamically
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 300; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.width = `${Math.random() * 2}px`;
  star.style.height = `${Math.random() * 2}px`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  starsContainer.appendChild(star);
}

// Function to transition to the animation page
function transitionToAnimation() {
  window.location.href = 'animation.html';
}


