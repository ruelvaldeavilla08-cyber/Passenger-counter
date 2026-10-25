// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let variable = count + " - "
    saveEl.textContent += variable; 
    console.log(count)

    count = 0;
    countEl.textContent = 0;
}

function resetCount() {
    count = 0;
    countEl.textContent = 0;
    saveEl.textContent = "Previous entires: ";
}
