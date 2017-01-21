// characters to phone keys
var abc = "abcdefghijklmnopqrstuvwxyz";
function charToPhoneKey(char)
{
    if(char.length !== 1)
    {
        var numbs = [];
        for(var i = 0; i < char.length; i++)
        {
            numbs.push(charToPhoneKey(char.charAt(i)));
        }
        return numbs;
    }
    var index = abc.indexOf(char.toLowerCase()) + 1;
    if (index < 1)
        return null;
    return Math.ceil(index / 3);
}