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
  
    const playerLength = li.parentNode.children.length;
    const playerString = parseFloat(playerLength);
    const playerQuantity = document.getElementById('player-Quantity');
    
    if(playerString > 5){
       const list = document.getElementById('item-list');
       list.removeChild(list.lastElementChild);
       alert('You can not select more than 5 player')
    }
    else{
      playerQuantity.innerText = playerString;
      // alert('you can not select more than 5 player')
    }
}

document.getElementById('add-Messi').addEventListener('click', function(){
    addPlayerName('Lionel Messi');
    document.getElementById('add-Messi').disabled = true;
    document.getElementById('add-Messi').style.backgroundColor = "gray";
   
  })
document.getElementById('add-Neymar').addEventListener('click', function(){
    addPlayerName('Neymar Jr');
    document.getElementById('add-Neymar').disabled = true;
    document.getElementById('add-Neymar').style.backgroundColor = "gray";
   
  })
document.getElementById('add-Kylian').addEventListener('click', function(){
    addPlayerName('Kylian Mbapp');
    document.getElementById('add-Kylian').disabled = true;
    document.getElementById('add-Kylian').style.backgroundColor = "gray";

   
  })
document.getElementById('add-Vítor').addEventListener('click', function(){
    addPlayerName('Vitor Machado');
    document.getElementById('add-Vítor').disabled = true;
    document.getElementById('add-Vítor').style.backgroundColor = "gray";
   
  })
document.getElementById('add-Sergio').addEventListener('click', function(){
    addPlayerName('Sergio Ramos');
    document.getElementById('add-Sergio').disabled = true;
    document.getElementById('add-Sergio').style.backgroundColor = "gray";
   
  })
document.getElementById('add-Renato').addEventListener('click', function(){
    addPlayerName('Renato Sanches');
    document.getElementById('add-Renato').disabled = true;
    document.getElementById('add-Renato').style.backgroundColor = "gray";
   
  })
  document.getElementById('add-Messi-2').addEventListener('click', function(){
    addPlayerName('Sadio-Mane');
    document.getElementById('add-Messi-2').disabled = true;
    document.getElementById('add-Messi-2').style.backgroundColor = "gray";
   
  })
  document.getElementById('add-Messi-3').addEventListener('click', function(){
    addPlayerName('Bayern Muenchen');
    document.getElementById('add-Messi-3').disabled = true;
    document.getElementById('add-Messi-3').style.backgroundColor = "gray";
   
  })
  document.getElementById('add-Messi-4').addEventListener('click', function(){
    addPlayerName('Cristiano Ronaldo');
    document.getElementById('add-Messi-4').disabled = true;
    document.getElementById('add-Messi-4').style.backgroundColor = "gray";
   
  })

document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerBudget = getInputValueById('per-player');

    let playerQuantity = document.getElementById('item-list').children.length;
    let playerQuantityValue = parseInt(playerQuantity);

    if(isNaN(perPlayerBudget) || perPlayerBudget < 0){
      alert('Please input a valid or Positive number');
    }
    else{
      const playerTotalExpenses = perPlayerBudget * playerQuantityValue;
     const playerExpenses = getTextValueById('player-expenses');
     setTextElementValueById('player-expenses', playerTotalExpenses);
    }
})

document.getElementById('btn-calculation-total').addEventListener('click', function(){
    const managerBudget = getInputValueById('manager-budget');
    const coachBudget = getInputValueById('coach-Budget');
    const perPlayerBudget = getInputValueById('per-player');

    let playerQuantity = document.getElementById('item-list').children.length;
    if(playerQuantity >= 6){
        const removeChiled = document.getElementById('item-list');
        removeChiled.pop();
        alert('You can not select more than 5 players');
    }
    else{
        let playerQuantityValue = parseInt(playerQuantity);
        if(isNaN(managerBudget) || isNaN(coachBudget) || isNaN(perPlayerBudget) || managerBudget < 0 || coachBudget < 0 || perPlayerBudget < 0){
        alert('Please Enter a valid or a positive number');
         }
         else{
        const playerTotalExpenses = perPlayerBudget * playerQuantityValue;
        const totalCost = managerBudget + coachBudget + playerTotalExpenses;
        setTextElementValueById('total-cost', totalCost);
    }
    }
})

