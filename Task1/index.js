document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn');
  
    function getRandomPosition() {
      const x = Math.random() * (window.innerWidth - button.offsetWidth);
      const y = Math.random() * (window.innerHeight - button.offsetHeight);
      return { x, y };
    }
  
    function moveButton() {
      const { x, y } = getRandomPosition();
      button.style.position = 'absolute';
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
    }
  
    button.addEventListener('mouseenter', () => {
      if (Math.random() < 0.5) {
        moveButton();
      }
    });
  
    button.addEventListener('click', () => {
      moveButton();
    });
  });