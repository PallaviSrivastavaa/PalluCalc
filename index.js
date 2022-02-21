let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
screen = " ";
let screenValue = " ";
for(item of buttons)
{
    item.addEventListener('click',(e)=> {
        buttonText = e.target.innerText;
        console.log('button text is',buttonText)
        if(buttonText=='X')
        {
            buttonText='*';
            screenValue+=buttonText;
            console.log(screenValue);
            screen.value = screenValue;
        }
        else if(buttonText=='C')
        {
            screen.value=" ";
            screen.value = screenValue;
            console.log(screenValue);


        }
        else if(buttonText=='=')
        {
            screen.value=eval(screenValue);
            console.log(screenValue);

        }
        else
        {
            screenValue+=buttonText;
            screen.value = screenValue;
            console.log(screenValue);

        }
    })
}