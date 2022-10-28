

const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

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
  event.dataTransfer.setData("text", [event.target.id, event.target.dataset.color]); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
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
  const dataArray  = transferredData.split(',');
  const draggableElementData = dataArray[0];

  console.log(dataArray[0] + ' and ' + dataArray[1])
  const droppableElementData = event.target.getAttribute("data-draggable-id");
  const isCorrectMatching = draggableElementData === droppableElementData;

    //   kleur in variabele zetten om te kunnen gebruiken
  const keyColor = dataArray[1];


  if(isCorrectMatching) {
    const draggableElement = document.getElementById(draggableElementData);
    event.target.classList.add("dropped");
    // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
    // event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    event.target.insertAdjacentHTML("afterbegin", `<img class="droppedImg" src="/assets/JelmerO/img/${draggableElementData}${keyColor}.png"/>`);
  }  
}


function startGame(){
    const lives = localStorage.getItem('lives')
    localStorage.setItem('lives', 100);
    const overlay = document.getElementById('overlay');
    overlay.style.display = "none";
    const message = document.getElementById('message');
    message.innerHTML = "Je hebt nog " + lives + " levens over!" ; 
}

function checkKey() {
    const lives = localStorage.getItem('lives')
    const livesNew = lives - 10;
    localStorage.setItem('lives', livesNew);
    

    message.innerHTML = "Je hebt nog " + lives + " levens over!" ; 
    // const droppedElements = document.querySelectorAll(".dropped");

    // droppedElements.forEach(elem => {
    //     console.log(elem);
    // });

}


// color and key piece number must be right

// zorgen dat de juiste id, bijvoorbeeld  key1  op display none wordt gezet i.p.v. de eerste
// waardoor nu de zwarte pieces verdwijnen als er een rode wordt gebruikt. omdat dat de eerste key1 is die voorkomt

// zorgen dat start game niet elke keer bij een refresh wordt laten zien, zodat de levens alleen aan het begin op 100 staan.