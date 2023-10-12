const mailList =
[
    'Giulia@gmail.com',
    'Erica@gmail.com',
    'Matteo@gmail.com',
    'Alexandru@gmail.com',
    'mekki@gmail.com',
    'Simone@gmail.com'
];


// valore input email
let mailValue = document.getElementById('mail').value;
let search = false;

console.log(mailValue);

for(let i = 0; i < mailList.length; i++)
{
    let currentMail = mailList[i];
    if(currentMail.toLocaleLowerCase() === mailValue.toLocaleLowerCase())
    {
        search = true;
    }
};

if(search)
{
    console.log('trovato')
}
else
{
    console.log('non trovato')
}
