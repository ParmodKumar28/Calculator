var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');

var operand1 = 0;
var operator = null;
var operand2 = null;


for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value === '+'||value=='43')
        {
            operand1 = parseFloat(display.innerText);
            operator = '+';
            display.innerText = '';
        }

        else if(value === '-')
        {
            operand1 = parseFloat(display.innerText);
            operator = '-';
            display.innerText = '';
        }

        else if(value === '/')
        {
            operand1 = parseFloat(display.innerText);
            operator = '/';
            display.innerText = '';
        }

        else if(value === '*')
        {
            operand1 = parseFloat(display.innerText);
            operator = '*';
            display.innerText = '';
        }

        else if(value === '%')
        {
            operand1 = parseFloat(display.innerText);
            operator = '%';
            display.innerText = '';
        }

        else if(value === 'DEL')
        {
            var currentDisplay = display.innerText;
            display.innerText = currentDisplay.slice(0,-1);
        }
        else if(value==='+/-')
        {
            display.innerText*=-1;
        }

        else if(value === '=')
        {
            operand2 = parseFloat(display.innerText);
            if(operator === '+')
            {
                var result = operand1 + operand2;
                display.innerText = result;
            }
            else if(operator === '-')
            {
                var result = operand1 - operand2;
                display.innerText = result;
            }
            else if(operator === '/')
            {
                if(operand2===0)
                {
                    display.innerText = 'Error';
                }
                else
                {
                    var result = operand1 / operand2;
                    display.innerText = result;
                }
            }
            else if(operator === '*')
            {
                var result = operand1 * operand2;
                display.innerText = result;
            }
            else if(operator === '%')
            {
                var result = operand1 % operand2;
                display.innerText = result;
            }

        }
        else if(value === 'AC')
        {
            operand1=0;
            operand2=null;
            operator=null;
            display.innerText = '';
        }
        else
        {
            display.innerText+=value;
        }
    });
    

}

// Keyboard Keypress

document.addEventListener('keydown', function(event){
    const key = event.key;
    console.log(key);

    const keyMapping = {
        '1':'1',
        '2':'2',
        '3':'3',
        '4':'4',
        '5':'5',
        '6':'6',
        '7':'7',
        '8':'8',
        '9':'9',
        '0':'0',
        '+':'+',
        '-':'-',
        '*':'*',
        '/':'/',
        '%':'%',
        '.':'.',
        'Enter':'=',
        'Backspace':'DEL',
        'Escape':'AC',
    }

    if(key in keyMapping)
    {
        const buttonValue = keyMapping[key];
        const button = document.querySelector(`[data-value="${buttonValue}"]`);

        if(button)
        {
            button.click();
        }
    }
});