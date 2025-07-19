const currentDay = new Date();
const firstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
const lastDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, 0);
const firstDay = firstDayOfMonth.getDay();

let day = "";

for ( let i = 1 ; i < firstDay ; i++ ){
    day += `<div class="box empty"></div>`;
} 

for ( let i = 1 ; i <= lastDayOfMonth.getDate() ; i++ ){
    if ( i === currentDay.getDate()  ) {
        day += `<div class="box box-${i} box-current">${i}</div>`;
    } else {
        day += `<div class="box box-${i}">${i}</div>`;
    }
}

document.querySelector(".calendar-day-of-month").innerHTML = day;