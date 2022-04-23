let formData = [];
let fields = document.querySelectorAll('input');
const saveBtn = document.getElementById('submit-button');
const form = document.getElementById('submit-form');

form.addEventListener('submit', e => { e.preventDefault(); });
saveBtn.addEventListener('click', saveData);

function saveData() {
    formData = JSON.parse(localStorage.getItem('formData')) || [];
    let data = [];
    let k = formData.length;
    let id = 0;
    if (k > 0) {
        id = formData[k - 1][0];
    }
    data[0] = id + 1;
    for (let i = 0; i < fields.length; i++) {
       data[i + 1] = fields[i].value;
    }
    formData[k] = data;
    localStorage.setItem('formData', JSON.stringify(formData));
    form.reset();
}

