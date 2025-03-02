// get text value by id 
function getTextValueById(id) {
    const textValue = parseInt(document.getElementById(id).innerText);
    return textValue;
}


// add Completed function 
function makeCompleted(btn) {
    document.getElementById(btn).addEventListener('click', function () {
        const totalTask = getTextValueById('totalTask');
        const totalTaskAssign = getTextValueById('taskAssign');

        const totalTaskResult = totalTask + 1;
        document.getElementById('totalTask').innerText = totalTaskResult;

        const remainingTask = totalTaskAssign - 1;
        document.getElementById('taskAssign').innerText = remainingTask;

        // btn disabled after click
        document.getElementById(btn).setAttribute('disabled', 'true');
    });
};