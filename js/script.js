
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
makeCompleted('card-btn-1');