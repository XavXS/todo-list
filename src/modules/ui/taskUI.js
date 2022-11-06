let times;

function loadTimes() {
    if(!times) times = createTimes();
    document.querySelector('#content').appendChild(times);
}

function createTimes() {
    let newTimes = document.createElement('div');
    newTimes.id = 'times';
    newTimes.innerHTML = 
        "<button id='day' class='time'>Day</button>" +
        "<button id='week' class='time'>Week</button>" +
        "<button id='month' class='time'>Month</button>" +
        "<button id='year' class='time'>Year</button>" +
        "<button id='all' class='time'>All</button>";
        
    newTimes.querySelector('#day')
        .addEventListener('click', (e) => {
            setActiveTime(e.target);
            // reload tasks day
        });

    newTimes.querySelector('#week')
        .addEventListener('click', (e) => {
            setActiveTime(e.target);
            // reload tasks day
        });
        
    newTimes.querySelector('#month')
        .addEventListener('click', (e) => {
            setActiveTime(e.target);
            // reload tasks day
        });

    newTimes.querySelector('#year')
        .addEventListener('click', (e) => {
            setActiveTime(e.target);
            // reload tasks day
        });

    newTimes.querySelector('#all')
        .addEventListener('click', (e) => {
            setActiveTime(e.target);
            // reload tasks all
        });

    return newTimes;
}

function setActiveTime(element) {
    let times = document.querySelectorAll('.time');
    times.forEach(e => e.classList.remove('active'));
    element.classList.add('active');
}

function loadContent() {
    document.querySelector('#content').textContent = '';
    loadTimes();
    setActiveTime(document.querySelector('.time'));
}

export {
    loadContent
};