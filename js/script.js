import data from '../data.json' with {type: 'json'};

window.addEventListener('load', () => { 
    console.log(document.querySelector('.time-option:checked').id);
    for (const info of data) {
        console.log(info);
    }
})