const button = document.querySelector('button');

const diceEl = document.querySelectorAll('.dice');

button.addEventListener('click',
function()
{
    diceEl.forEach((e) =>
    {
        e.classList.add('d-none')
    });

    let randomNumberPlayer = Math.floor(Math.random() * 6) + 1;
    let randomNumberComputer = Math.floor(Math.random() * 6) + 1;
    let playerOutcome = document.querySelector('.player .outcome')
    let computerOutcome = document.querySelector('.computer .outcome')
        
    if(randomNumberComputer > randomNumberPlayer)
    {
        console.log('Computer wins');
        playerOutcome.innerText = 'Loser';
        computerOutcome.innerText = 'Winner';
    }
    
    else if(randomNumberComputer < randomNumberPlayer)
    {
        console.log('Player wins');
        playerOutcome.innerText = 'Winner';
        computerOutcome.innerText = 'Loser';

    }
    
    else 
    {
        console.log('draw');
        playerOutcome.innerText = computerOutcome.innerText = 'Draw';
    }


    console.log('Player ' + randomNumberPlayer);
    console.log('Computer ' + randomNumberComputer);
    
    let faceClassComputer = document.querySelector(`.computer .face-${randomNumberComputer}`).classList
    let faceClassPlayer = document.querySelector(`.player .face-${randomNumberPlayer}`).classList

    faceClassComputer.remove('d-none')
    
    faceClassPlayer.remove('d-none')
});


