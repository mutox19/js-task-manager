//selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm); //handles the form submit
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck); //handles the form click


//event handlers
function handleSubmitForm(e) {

    //prevent the page from refreshing
    e.preventDefault();

    //get users input 
    let userInput = document.querySelector('input');
    
    //check user input is not empty
    if (userInput.value != '') {
        addTodo(userInput.value);
        
    }
    //clear user input 
    userInput.value = '';
}

function handleClickDeleteOrCheck(e) {
    e.preventDefault();
}


//helper functions
function addTodo(todo) {

    //selects the ul element from index.html
    let ul = document.querySelector('ul');

    //creates a new li element
    let li = document.createElement('li');

    //this is the buttons that show up beside the new todos
    li.innerHTML = `<span class="todo-item">${todo}</span>
    <button name="checkButton">Check button</button>
    <button name="deleteButton">Delete Button</button>`;
    //add a new todo
    li.classList.add('todo-list-item');
    //append the new todo to the list
    ul.appendChild(li);
    
}