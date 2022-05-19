// Your code here
const tbl = document.querySelector('table');

const makeRow = () => {
  const row = document.createElement('tr');
  for (let i = 0; i < 20; i++) {
    const td = document.createElement('td');
    row.appendChild(td);
  }
  tbl.appendChild(row);
}

const addRow = document.getElementById('add-row')
addRow.addEventListener('click', makeRow);

let chosenColor = 'red'

const colorize = (event) => {
  if (event.target.tagName !== 'TD') {
    return;
  }
  if (!event.target.className) {
    event.target.className = chosenColor;
  }
  else {
    event.target.className = '';
  }
}

tbl.addEventListener('click', colorize);

const select = document.querySelector('select');

select.addEventListener('change', (event) => {
  chosenColor = event.target.value;
})

const addMouseOver = () => {
  tbl.addEventListener('mouseover', colorize);
}

const removeMouseOver = () => {
  tbl.removeEventListener('mouseover', colorize);
}

tbl.addEventListener('mousedown', addMouseOver);
tbl.addEventListener('mouseup', removeMouseOver);
