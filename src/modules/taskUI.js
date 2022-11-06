function createTimes() {
    let content = document.querySelector('#content');

    let container = document.createElement('times');
    container.id = 'times';

    let day = document.createElement('button');
    day.classList.add('time');
    day.id = 'day';
    day.textContent = 'day';
    day.addEventListener('click', (e) => {
        setActiveTime(e.target);
        // reload tasks day
    });

    let week = document.createElement('button');
    week.classList.add('time');
    week.id = 'week';
    week.textContent = 'week';
    week.addEventListener('click', (e) => {
        setActiveTime(e.target);
        // reload tasks week
    });

    let year = document.createElement('button');
    year.classList.add('time');
    year.id = 'year';
    year.textContent = 'year';
    year.addEventListener('click', (e) => {
        setActiveTime(e.target);
        // reload tasks year
    });

    let all = document.createElement('button');
    all.classList.add('time');
    all.id = 'all';
    all.textContent = 'all';
    all.addEventListener('click', (e) => {
        setActiveTime(e.target);
        // reload tasks all
    });
    
    container.appendChild(day);
    container.appendChild(week);
    container.appendChild(year);
    container.appendChild(all);

    content.appendChild(container);
}

function setActiveTime(element) {
    let times = document.querySelectorAll('.time');
    times.forEach(e => e.classList.remove('active'));
    element.classList.add('active');
}

function loadContent() {
    document.querySelector('#content').textContent = '';
    createTimes();
    setActiveTime(document.querySelector('.time'));
}

export {
    loadContent
};