import data from '/data.json';
const timeOption = document.querySelector('.time-option:checked');
const timeOptions = document.querySelectorAll('.time-option');
let currentTimeFrame = timeOption.id;

for (const timeOption of timeOptions) {
    timeOption.addEventListener('change', (e) => {
        currentTimeFrame = e.currentTarget.id;
        repopulateCards();
    })
}

window.addEventListener('load', () => { 
    repopulateCards();
})

function repopulateCards() {
    
    for (const info of data) {
        const title = info['title'].replaceAll(new RegExp('\\s+', 'g'), '-').toLowerCase();
        const card = document.querySelector(`.card.${title}`);
        const timePara = card.querySelector('.time');
        const prevTimePara = card.querySelector('.prev-time');
        const timeFramesObj = info.timeframes[`${currentTimeFrame}`];
        
        timePara.textContent = `${timeFramesObj.current}hrs`;
        prevTimePara.textContent = `Last ${currentTimeFrame} - ${timeFramesObj.previous}hrs`;
    
    }
}