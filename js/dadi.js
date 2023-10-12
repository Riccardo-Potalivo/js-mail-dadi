
let randomNumberPlayer = Math.floor(Math.random() * 6) + 1;
let randomNumberComputer = Math.floor(Math.random() * 6) + 1;

console.log('Player ' + randomNumberPlayer);
console.log('Computer ' + randomNumberComputer);

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