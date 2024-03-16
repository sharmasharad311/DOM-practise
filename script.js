// let's take addition side
let addInput = document.getElementById('add-input');
let addButton = document.getElementById('add-button');

count=0;
function increase(){
    count++;
    addInput.value = count;
}
addButton.addEventListener('click', increase);

// let's take subtract side
let subInput = document.getElementById('sub-input');
let subButton = document.getElementById('sub-button');

count=0;
function decrease(){
    count--;
    subInput.value = count;
}
subButton.addEventListener('click', decrease);