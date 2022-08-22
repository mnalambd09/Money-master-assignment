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

document.getElementById('add-Messi').addEventListener('click', function(){
    const addItem = document.getElementById('item-list');
    const li = document.createElement('li');
    li.innerText = 'Lionel Messi';
    li.classList.add('item');
    addItem.appendChild(li);
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
    
    const totalCost = managerBudget + coachBudget;
    setTextElementValueById('total-cost', totalCost);

    
})