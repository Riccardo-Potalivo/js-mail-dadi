const mailList =
[
    'Giulia@gmail.com',
    'Erica@gmail.com',
    'Matteo@gmail.com',
    'Alexandru@gmail.com',
    'mekki@gmail.com',
    'Simone@gmail.com'
];

const button = document.querySelector('button')



button.addEventListener('click',
function()
{
    // valore input email
    let mailValue = document.getElementById('mail').value;
    console.log(mailValue);
    let search = false;
    
    // range di ricerca
    for(let i = 0; i < mailList.length; i++)
    {
        let currentMail = mailList[i];
        // verifica corrispondenza
        if(currentMail.toLocaleLowerCase() === mailValue.toLocaleLowerCase())
        {
            search = true;
        }
    };
    
    // responso verifica
    if(search)
    {
        console.log('trovato')
    }
    else
    {
        console.log('non trovato')
    }
});

