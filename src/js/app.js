document.addEventListener('DOMContentLoaded', () => {
  const colAll = document.querySelectorAll('.col');
  const goblin = document.querySelector('.goblin');

  goblin.addEventListener('click', () => {
    console.log('test');

    // добавляем гоблина в случайное место    
    const randomIndex = Math.floor(Math.random() * colAll.length);
    const position = colAll[randomIndex];

    // удаляем гоблина
    goblin.parentElement.removeChild(goblin);

    // добавляем гоблина в новое место  
    position.appendChild(goblin);
  })
})
