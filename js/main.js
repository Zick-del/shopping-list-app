// Getting the list
const list = document.querySelector('.list');
const main = document.querySelector('main');

// Getting the inputs and buttons
const itemInput = document.querySelector('.inputItem');
const itemAmount = document.querySelector('.inputAmount');
const addButton = document.querySelector('.add-button');
const unit = document.querySelector('.units');

// Getting the navbar and adding click event
const navbar = document.querySelector('nav')
const navbarButton = document.querySelector('.navbar-button');

navbarButton.onclick = () => {
  navbar.classList.toggle('hide')
}

// Items counter
let addedItems = 0;
// Adding elements to the list
addButton.onclick = () => {
  if (itemInput.value !== '' && itemAmount.value > 0) {

    
    const newElem = document.createElement("div");
    newElem.classList.add('listItem');
    const newElemName = document.createElement("p");
    const elemContent = document.createTextNode(`${itemInput.value} ${itemAmount.value}${unit.value}`);
    const clearElemBtn = document.createElement('button');
    const clearElemBtnText = document.createTextNode('DEL');
    const tickElem = document.createElement('input');
    tickElem.setAttribute('type', 'checkbox');
    

    newElem.appendChild(tickElem);
    newElem.appendChild(newElemName);
    newElemName.appendChild(elemContent);
    newElem.appendChild(clearElemBtn);
    list.appendChild(newElem);
    clearElemBtn.appendChild(clearElemBtnText);
    
    itemInput.value = '';
    itemAmount.value = '';
    addedItems++;

    clearElemBtn.onclick = () => {
      newElem.remove();
    }

    tickElem.onclick = () => {
      newElem.classList.toggle('bought');
    }

  }
}


