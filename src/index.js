import task from './modules/task.js';

var a = new task('title', 'description', 1, 1);

var tasks = [a];

loadTasks();

function loadTasks() {
    let body = document.querySelector('body');
    console.log(body);
    tasks.forEach((task) => {
        body.appendChild(task.getContent());
    })
}