const mailList =
[
    'Giulia@gmail.com',
    'Erica@gmail.com',
    'Matteo@gmail.com',
    'Alexandru@gmail.com',
    'mekki@gmail.com',
    'Simone@gmail.com'
];

const button = document.querySelector('button');
const outcome = document.querySelector('.alert')



button.addEventListener('click',
function()
{
    outcome.className = 'alert d-none';

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
    let outcomeText, outcomeClass;

    if(search)
    {
        console.log('trovato');
        outcomeText = 'Accesso Consentito';
        outcomeClass = 'alert-success';
    }
    else
    {
        console.log('non trovato');
        outcomeText = 'Accesso Negato';
        outcomeClass = 'alert-danger';
    }

    outcome.innerText = outcomeText;
    outcome.classList.add(outcomeClass);
    outcome.classList.remove('d-none');

});

