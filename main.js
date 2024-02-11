function addOperations(input)
{
    if (!input)
    {
        calculations = "";
        showResult(calculations);
    }
    else if (input === '=')
    {
        calculations = eval(calculations);
        if (calculations)
            showResult(calculations);
    }
    else
    {
        calculations += input;
        showOperations(input);
    }
}

function showOperations(input)
{
    document.getElementById("display").innerHTML += input;
}

function showResult(result)
{
    document.getElementById("display").innerHTML = result;
}


let calculations = "";
