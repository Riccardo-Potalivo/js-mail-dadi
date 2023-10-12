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
        
    if(randomNumberComputer > randomNumberPlayer)
    {
        console.log('Computer wins')
    }
    
    else if(randomNumberComputer < randomNumberPlayer)
    {
        console.log('Player wins')
    }
    
    else 
    {
        console.log('draw')
    }

    console.log('Player ' + randomNumberPlayer);
    console.log('Computer ' + randomNumberComputer);
    
    let faceClassComputer = document.querySelector(`.computer .face-${randomNumberComputer}`).classList
    let faceClassPlayer = document.querySelector(`.player .face-${randomNumberPlayer}`).classList

    faceClassComputer.remove('d-none')
    
    faceClassPlayer.remove('d-none')
});


