document.addEventListener('DOMContentLoaded', () => {
  const colAll = document.querySelectorAll('.col');
  const goblin = document.querySelector('.goblin');

  goblin.addEventListener('click', () => {
    // добавляем гоблина в случайное место    
    const randomIndex = Math.floor(Math.random() * colAll.length);
    const position = colAll[randomIndex];

    // перемещаем гоблина в новое место  
    position.appendChild(goblin); 
  })
})
