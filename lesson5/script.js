const chapters = document.querySelector('#chapters');
const button = document.querySelector('button');
const output = document.querySelector('.list');

button.addEventListener('click', () => {
  if (chapters.value != '') {
    
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = chapters.value;
    deletebutton.textContent = 'X';
    li.append(deletebutton);
    output.append(li);
    deletebutton.addEventListener('click', function() {
    output.removeChild(li);
    chapters.focus;
});
chapters.value - '';
chapters.focus;
  }
});