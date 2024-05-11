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
    
    for (const info of data) {
        const title = info['title'].replaceAll(new RegExp('\\s+', 'g'), '-').toLowerCase();
        const card = document.querySelector(`.card.${title}`);
        
        
    }
})