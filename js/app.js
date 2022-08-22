function getInputValueById(inputValue){
    const perPlayer = document.getElementById(inputValue);
    const perPlayerString = perPlayer.value;
    const perPlayerBudget = parseFloat(perPlayerString);
    return perPlayerBudget;
}

function getTextValueById(inputInnerText){
    const playerExpenses = document.getElementById(inputInnerText);
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesValue = parseFloat(playerExpensesString);
    return playerExpensesValue;
}
function setTextElementValueById(preValue, NewValue){
    const textElement = document.getElementById(preValue);
    textElement.innerText = NewValue;
   
}

function addPlayerName(playerName){
    const addItem = document.getElementById('item-list');
    const li = document.createElement('li');
    li.innerText = playerName;
    addItem.appendChild(li);
}

function disableBtn(btnDisableId) {
    document.getElementById(btnDisableId).disabled = true;
    document.getElementById(btnDisableId).style.backgroundColor = "gray";
    
  }

document.getElementById('add-Messi').addEventListener('click', function(){
    addPlayerName('Lionel Messi');
    disableBtn('add-Messi');
   
  })
document.getElementById('add-Neymar').addEventListener('click', function(){
    addPlayerName('Neymar Jr');
    disableBtn('add-Neymar');
   
  })
document.getElementById('add-Kylian').addEventListener('click', function(){
    addPlayerName('Kylian Mbapp');
    disableBtn('add-Kylian');
   
  })
document.getElementById('add-Vítor').addEventListener('click', function(){
    addPlayerName('Vitor Machado');
    disableBtn('add-Vítor');
   
  })
document.getElementById('add-Sergio').addEventListener('click', function(){
    addPlayerName('Sergio Ramos');
    disableBtn('add-Sergio');
   
  })
document.getElementById('add-Renato').addEventListener('click', function(){
    addPlayerName('Renato Sanches');
    disableBtn('add-Renato');
   
  })


document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerBudget = getInputValueById('per-player');

    const totalPlayer = 5;
    const playerTotalExpenses = perPlayerBudget * totalPlayer;
    const playerExpenses = getTextValueById('player-expenses');
    setTextElementValueById('player-expenses', playerTotalExpenses);
})

document.getElementById('btn-calculation-total').addEventListener('click', function(){
    const managerBudget = getInputValueById('manager-budget');
    const coachBudget = getInputValueById('coach-Budget');
    const perPlayerBudget = getInputValueById('per-player');

    const totalPlayer = 5;
    const playerTotalExpenses = perPlayerBudget * totalPlayer;
    
    const totalCost = managerBudget + coachBudget + playerTotalExpenses;
    setTextElementValueById('total-cost', totalCost);

    
})

