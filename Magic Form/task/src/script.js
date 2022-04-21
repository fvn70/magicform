let formData = JSON.parse(localStorage.getItem('formData')) || [];
let fields = document.querySelectorAll('input');

fields.forEach((item) => {
    console.log(item.innerHTML);
    item.addEventListener('change', saveData);
});

loadData();

function saveData() {
    formData = [];
    for (let i = 0; i < fields.length; i++) {
       formData[i] = fields[i].value;
    }
    localStorage.setItem('formData', JSON.stringify(formData));
}

function loadData() {
    if (formData) {
        for (let i = 0; i < fields.length; i++) {
            if (formData[i]) {
                fields[i].value = formData[i];
            }
        }
    }
}