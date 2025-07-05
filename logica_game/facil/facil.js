
document.addEventListener('DOMContentLoaded', () => {
  const leftPanel = document.getElementById('left-panel');
  // SVG de ejemplo: círculo partido en 9 con 3 partes pintadas
  leftPanel.innerHTML = `
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="90" fill="#eee" stroke="black" stroke-width="2"/>
      <path d="M100,100 L100,10 A90,90 0 0,1 178,55 Z" fill="#4caf50"/>
      <path d="M100,100 L178,55 A90,90 0 0,1 190,100 Z" fill="#4caf50"/>
      <path d="M100,100 L190,100 A90,90 0 0,1 178,145 Z" fill="#4caf50"/>
    </svg>
  `;
});


const correctOptionId = 'option3'; // ejemplo: 3/9 es correcto

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', e => {
    const id = e.currentTarget.id;
    if(id === correctOptionId){
      document.getElementById('sound-correct').play();
      animateClock('green');
    } else {
      document.getElementById('sound-wrong').play();
      animateClock('red');
    }
    // Aquí luego pasamos a la siguiente pregunta
  });
});

function animateClock(color) {
  const clock = document.getElementById('clock-area');
  clock.style.color = color;
  clock.classList.add('pulse');
  setTimeout(() => clock.classList.remove('pulse'), 1000);
}
