// get text value by id 
function getTextValueById(id) {
    const textValue = parseInt(document.getElementById(id).innerText);
    return textValue;
}


// add Completed function 
function makeCompleted(btn, cardTitle) {
    document.getElementById(btn).addEventListener('click', function () {

        const totalTask = getTextValueById('totalTask');
        const totalTaskAssign = getTextValueById('taskAssign');

        // update total Task
        const totalTaskResult = totalTask + 1;
        document.getElementById('totalTask').innerText = totalTaskResult;

        // update total remaining task
        const remainingTask = totalTaskAssign - 1;
        document.getElementById('taskAssign').innerText = remainingTask;

        // add history history 
        const title = document.getElementById(cardTitle).innerText;
        const div = document.createElement('div');
        div.className = 'p-2 mb-2 rounded-xl bg-gray-100';
        div.innerHTML = `<p class="text-base font-normal p-2 ">You have Complete The Task <span class="font-bold">${title}</span>. ${new Date().toLocaleString()} </p>`
        const historyContainer = document.getElementById('history-container');
        historyContainer.insertBefore(div, historyContainer.firstChild);

        // show Board Update Success
        alert('Board Update Successfully');

        // btn disabled after click
        document.getElementById(btn).setAttribute('disabled', 'true');

        // show All task 
        if (totalTaskAssign === 1) {
            alert('Congrats !!! You Have Completed All The Current Task');
        }
    });
};