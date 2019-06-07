// Define UI Vars
// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');

// // Load all event listeners
// loadEventListeners();

// // Load all event listeners
// function loadEventListeners() {
//     //DOM Load event
//     document.addEventListener('DOMcontentLoaded', getTasks);
//   // Add task event
//   form.addEventListener('submit', addTask);
//   // remove task event
//   taskList.addEventListener('click', removeTask);
//   // clear task event
//   clearBtn.addEventListener('click', clearTasks)
//   // filter task event
//   filter.addEventListener('keyup', filterTasks)
// }

// // get tasks from LS
// function getTasks(){
//     let tasks;
//     if(localStorage.getItem('tasks') === null){
//         task = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.forEach(function(task){
//         //create li element
//         const li = document.createElement('li');
//         //add class
//         li.className = 'collection-item';
//         // create text node and append to li
//         li.appendChild(document.createTextNode(task));
//         //create new link element
//         const link = document.createElement('s');
//         // add class
//         link.className = 'delete-item';
//         //add icon HTML
//         link.innerHTML = '<button>X<button>';
//         //append the link to li
//         li.appendChild(link);
//         //append li to ul
//         taskList.appendChild(li);
//     });
// }
// // Add Task
// function addTask(e) {
//   if(taskInput.value === '') {
//     alert('Add a task');
//     taskList.removeChild(li)
//   }

//   // Create li element
//   const li = document.createElement('li');
//   // Add class
//   li.className = 'collection-item';
//   // Create text node and append to li
//   li.appendChild(document.createTextNode(taskInput.value));
//   // Create new link element
//   const link = document.createElement('s');
//   // Add class
//   link.className = 'delete-item';
//   // Add icon html
//   link.innerHTML = '<button>X<buttton>';
//   link.style.backgroundColor = 'blue';
//   // Append the link to li
//   li.appendChild(link);

//   // Append li to ul
//   taskList.appendChild(li);

//   //Store in LS
//   storeTaskInLocalStorage(taskInput.value);

//   // Clear input
//   taskInput.value = '';

//   e.preventDefault();
// }


// //store task
// function storeTaskInLocalStorage(task){
//     let tasks;
//     if(localStorage.getItem('tasks'));
// }
// tasks.push(task);
// localStorage.setItem('tasks', JSON.stringify(tasks));

// //remove task
// function removeTask(e){
//     if(e.target.parentElement.classList.contains('delete-item')){
//         if(confirm('Are you absoulutely sure?')){
//             e.target.parentElement.parentElement.remove();
//             // remove from LS
//             removeTaskFromLocalStorage(e.target.parentElement.parentElement);
//         }
//     }
// }

// // remove from LS
// function removeTaskFromLocalStorage(taskItem){
//     let tasks;
//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     }else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.forEach(function(task, index){
//         if(taskItem.textContent === task){
//             tasks.splice(index, 1);
//         }
//     });
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     //clear task
//     function clearTasks(){
//         //tasklist.innerHTML = '';

//         // FASTER
//         while(taskList.firstChild){
//             taskList.removeChild(taskList.firstChild);
//         }
//     }
//     // clear from ls
//     clearTasksFromLocalStorage() 
//     //filter tasks
//     function filterTasks(e){
//         const text = e.target.value.toLowerCase();

//         document.querySelectorAll('.collection-item').forEach(function(task){
//             const item = task.firstChild.textContent;
//             if(item.toLocaleLowerCase().indexOf(text)!= -1){
//                 task.style.display = 'flex';
//             }else {
//                 task.style.display = 'none';
//             }
//         });
    
//     }    }



// const arr = [1,2,3,4,5,6,7,8,9,10];

// function check(){
   
//     for(let i=0; i < arr.length; i++) {
//         if (i%2 === 0){
//             console.log('Fizz')
//         } else {
//             console.log('Buzz')
//         }
//     } 
// };

//  check();

//classes-tthin tall tony
// function Vehicles(make, model, year){
// this.make = make;
// this.model = model;
// this.year = year;
// this.isRunning = false;

// }

// Vehicles.prototype.turnOn = function(){
//     return !this.isRunning;
// }

// Vehicles.prototype.turnOff = function(){
//     return !this.isRunning;
// }
// Vehicles.prototype.honk = function(){
//     if(!this.isRunning){
//         return 'beep'
//     }
// }




// const car = new Vehicles('mercedes', 290, 1995);
// // console.log(car.turnOff());
// console.log(car.honk())


// //Class implementation


// class Vehicles {
//     constructor(make, model,year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.isRunning = false;
//     }

//     turnOn(){
//         return !this.isRunning;
//     }
//     turnOff(){
//         return this.isRunning
//     }
//     honk(){
//         if(!this.isRunning){
//             return 'beep'
//         }
//     }
// }


// //

const userName = prompt( "please kindly enter your name",'');
const cart = document.querySelector('.supliment');
cart.innerHTML = userName;





