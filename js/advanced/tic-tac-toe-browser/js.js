var xTurn = true;

const xP = "X";
const oP = "O";

function positionClicked(element)
{

    if (isBlank(element))
    {
        element.firstChild.innerHTML = xTurn ? xP : oP;
        xTurn = !xTurn;

        var winner = checkForWin();
        if (winner === undefined)
        {
            if(isAllUsed())
            {
                setTimeout(function ()
                {
                    alert("Nobody wins :(");
                    location.reload();
                }, 1);
            }
        }
        else
        {
            setTimeout(function ()
            {
                alert(winner + " wins!");
                location.reload();
            }, 1);
        }

    }
}

function checkForWin()
{
    var spaces = document.getElementById("game-board").getElementsByClassName("square");

    //search rows
    for (var y = 0; y < spaces.length; y += 3)
    {
        var points = 0;
        for (var x = 0; x < 3; x++)
        {
            var element = spaces[y + x];
            if (!isBlank(element))
            {
                points += element.firstChild.innerHTML === xP ? 1 : -1;
            }
        }
        if (points === 3)
            return xP;
        else if (points === -3)
            return oP;
    }

    //search columns
    for (var x = 0; x < 3; x++)
    {
        var points = 0;
        for (var y = 0; y < spaces.length; y += 3)
        {
            var element = spaces[x + y];
            if (!isBlank(element))
            {
                points += element.firstChild.innerHTML === xP ? 1 : -1;
            }
        }
        if (points === 3)
            return xP;
        else if (points === -3)
            return oP;
    }

    //search diagonally starting from top, left to right
    var points = 0;
    for (var a = 0; a < spaces.length; a += 4)
    {
        var element = spaces[a];
        if (!isBlank(element))
        {
            points += element.firstChild.innerHTML === xP ? 1 : -1;
        }
        if (points === 3)
            return xP;
        else if (points === -3)
            return oP;
    }

    //search diagonally starting from top, right to left
    points = 0;
    for (var a = 2; a < spaces.length; a += 2)
    {
        var element = spaces[a];
        if (!isBlank(element))
        {
            points += element.firstChild.innerHTML === xP ? 1 : -1;
        }
        if (points === 3)
            return xP;
        else if (points === -3)
            return oP;
    }
}

function isAllUsed()
{
    var spaces = document.getElementById("game-board").getElementsByClassName("square");
    for (var i = 0; i < spaces.length; i++)
    {
        if(isBlank(spaces[i]))
            return false;
    }
    return true;
}

function isBlank(element)
{
    return element.firstChild.innerHTML !== xP && element.firstChild.innerHTML !== oP;
}