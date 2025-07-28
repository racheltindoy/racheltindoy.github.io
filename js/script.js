const astronaut = document.querySelector(".floating_astronaut");

function randomFloat() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  astronaut.style.transform = `translate(${x}px, ${y}px)`;
}

setInterval(randomFloat, 3000); // move every 3 seconds
