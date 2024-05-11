import data from '../data.json' with {type: 'json'};
const timeOption = document.querySelector('.time-option:checked');
const timeOptions = document.querySelectorAll('.time-option');
let currentTimeFrame = timeOption.id;

for (const timeOption of timeOptions) {
    timeOption.addEventListener('change', (e) => {
        currentTimeFrame = e.currentTarget.id;
    })
}

window.addEventListener('load', () => { 
    console.log(currentTimeFrame);
    for (const info of data) {
        console.log(info);
    }
})