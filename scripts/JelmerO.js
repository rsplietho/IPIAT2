const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");
const droppableElementsContainer = document.getElementById('droppableElementsContainer');
const checkButton = document.getElementById('checkButton');
const retryButton = document.getElementById('retryButton');
var countDragged = 0;
// document.addEventListener('contextmenu', event => event.preventDefault());

window.onload = (event) => {
  const hp = localStorage.getItem('hpBar');
};

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - This is where we can define the drag data
  // elem.addEventListener("drag", drag); // Fires when a dragged item (element or text selection) is dragged
  // elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
  elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
  elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
  elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});

// Drag and Drop Functions

//Events fired on the drag target

function dragStart(event) {
  event.dataTransfer.setData("text",event.target.dataset.keyAndColor); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
}
//Events fired on the drop target

function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); // Prevent default to allow drop
  }
}

function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
  event.preventDefault(); // This is in order to prevent the browser default handling of the data
  event.target.classList.remove("droppable-hover");
  console.log(event.target)


  const transferredData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
  console.log(transferredData);
  const dataArray  = transferredData.split('.');


  // id van de key die is gedropped
  const keyType = dataArray[0];

  console.log(dataArray[0] + ' and ' + dataArray[1])
  const droppableElementData = event.target.getAttribute("data-draggable-id");
  const isCorrectMatching = keyType === droppableElementData;
  

    //kleur in variabele zetten om te kunnen gebruiken
  const keyColor = dataArray[1];


  if(isCorrectMatching) {
    const draggableElement = document.querySelector('[data-key-and-color="'+transferredData+'"]');
    event.target.classList.add("dropped");
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    event.target.insertAdjacentHTML("afterbegin", `<img class="droppedImg" src="/assets/JelmerO/img/${keyType}${keyColor}.png"/>`);
    countDragged += 1;
    console.log(countDragged);
    if(countDragged == 3){
      checkButton.disabled = false;
    }
  }  
}

// Om te checken of de combinatie van de sleutels de juiste is.
function checkKey() {
  const hp = localStorage.getItem('hpBar')
  const hpNew = hp - 50;
  const draggedItems = [];
  droppableElementsContainer.classList.add('droppable-elementsChecked');

  setTimeout(function() {
    draggableElements.forEach(elem => {
      if(elem.classList.contains('dragged')) {
        draggedItems.push(elem);
      }
    });
    // check of de kleur van alle sleutels zwart is
    if(
      draggedItems[0].dataset.color === "Red" &&
      draggedItems[1].dataset.color === "" &&
      draggedItems[2].dataset.color === "Blue"
      ){
        localStorage.setItem('completedPuzzles', + 1)
        location.reload();
      }else{
        makeRed();
        retryButton.disabled = false;
        showNewHP(hpNew)
        // location.reload();

      }
      countDragged = 0;
    console.log(draggedItems)
    checkButton.disabled = true;
  }, 2000);



}

function makeRed(){
  const droppedElements = document.getElementsByClassName('dropped')
  Array.from(droppedElements).forEach(elem => {
    elem.style.border = "5px solid red";
  });
}

function retry(){
  location.reload(); 
  retryButton.disabled = true;
}

function showNewHP(hp){
  localStorage.setItem('hpBar', hp);
}

// When HP == 0
if (localStorage.getItem('hpBar') == 0){
  window.location.href = "gameover.html";
}

// When all puzzles are completed == 0
if (localStorage.getItem('completedPuzzles') == 1){
  window.location.href = "eindscherm.html";
}


// color and key piece number must be right CHECKED

// CHECKED
// zorgen dat de juiste id, bijvoorbeeld  key1  op display none wordt gezet i.p.v. de eerste
// waardoor nu de zwarte pieces verdwijnen als er een rode wordt gebruikt. omdat dat de eerste key1 is die voorkomt

// TODO
// zorgen dat start game niet elke keer bij een refresh wordt laten zien, zodat de levens alleen aan het begin op 100 staan.
