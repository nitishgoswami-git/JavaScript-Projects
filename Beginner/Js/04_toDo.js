const add = document.getElementById('addTask')

add.addEventListener('click', ()=>{
    let content = document.getElementById('taskInput').value;
    let li = document.createElement('li');
    li.textContent = content;
    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = "";
});