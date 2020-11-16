const drop = document.getElementById('form-drop');
const display = document.querySelector('.display-select');
let options = document.querySelectorAll('.option');

drop.addEventListener('click', () => {
    display.classList.toggle('display-select')
}) 

let arrOption = [
    {title: "Pizza", number: 1},
    {title: "Lasagna", number: 2},
    {title: "Spaghetti", number: 3}
];

let arrHtml = "", item;

for(item of arrOption) {
    arrHtml += `<div class="option" onclick="getOption(${item.number})">
                    <label for="${item.title}">
                        <div class="option-drop-down__box">${item.title}</div>
                    </label>
                </div>`
};

document.getElementById('select').innerHTML = arrHtml;

function getOption(n) {
    let optionInnerHtml = document.querySelectorAll('.option-drop-down__box');
    const selecterInnerHtml = document.getElementById('selectInneHtml');

        selecterInnerHtml.innerHTML = optionInnerHtml[n-1].innerHTML;
            console.log(n)
        return false;
};