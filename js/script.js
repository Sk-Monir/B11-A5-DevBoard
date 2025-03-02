
// background Change on button Click 
document.getElementById('theme-btn').addEventListener('click', function () {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = color;
});


// // add date dynamically
const today = new Date();
// add weekday name and date 
const day = today.toLocaleDateString('en-BD', { weekday: 'long' });
const date = today.toLocaleDateString('en-BD', { month: 'short', day: 'numeric', year: 'numeric' });
// assign in html
document.getElementById('day').innerText = day;
document.getElementById('date').innerText = date;


// task make Completed
// card-1
makeCompleted('card-btn-1', 'title-1');
// card-2
makeCompleted('card-btn-2', 'title-2');
// card-3
makeCompleted('card-btn-3', 'title-3');
// card-4
makeCompleted('card-btn-4', 'title-4');
// card-5
makeCompleted('card-btn-5', 'title-5');
// card-6
makeCompleted('card-btn-6', 'title-6');


// Clear all to  history-container
document.getElementById('clear-all').addEventListener('click', function () {
    document.getElementById('history-container').innerHTML = ' ';
})
