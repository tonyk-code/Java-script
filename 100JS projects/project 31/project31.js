const month = document.querySelector('.month');
const day = document.querySelector('.day');
const currentDate = new Date();

month.innerText = currentDate.toLocaleString('default', { month: 'long' });
day.innerText = currentDate.toLocaleString('default', { weekday: 'long' }) + ' ' + currentDate.toLocaleString('default', { day: 'numeric' }) + ' ' + currentDate.toLocaleString('default', { year: 'numeric' });