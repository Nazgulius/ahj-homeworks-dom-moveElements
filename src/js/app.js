import img from '../img/goblin.png';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table'); // создаётся таблицу 
  table.className = "table";
  document.body.append(table);

  // создаём строки и столбцы таблицы 
  for (let i = 0; i < 4; i++) {
    const tr = document.createElement('tr');
    tr.className = "row";
    table.append(tr);

    for (let i = 0; i < 4; i++) {
      const td = document.createElement('td');
      td.className = "col";
      tr.append(td);
    }
  }

  const colAll = document.querySelectorAll('.col'); // находит все col 

  const imgGoblin = document.createElement('img'); // поменять на картинку img 
  imgGoblin.className = "goblin";
  imgGoblin.src = img;
  imgGoblin.alt = "goblin";

  colAll[0].appendChild(imgGoblin); // устанавливаем гоблина в первую ячейку

  const goblin = document.querySelector('.goblin'); // находим гоблина 


  goblin.addEventListener('click', () => {
    let currentIndex = Array.from(colAll).indexOf(imgGoblin.parentElement);
    let randomIndex;

    // добавляем гоблина в случайное место
    do {
      randomIndex = Math.floor(Math.random() * colAll.length);
    } while (randomIndex === currentIndex);

    // перемещаем гоблина в новое место 
    colAll[randomIndex].appendChild(imgGoblin);
  })
})