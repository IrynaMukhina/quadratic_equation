
var a=Number(prompt('Enter A'));
var b=Number(prompt('Enter B'));
var c=Number(prompt('Enter C'));
var result=squereEcuation(a, b, c)

document.writeln(result);

function squereEcuation(a, b, c) {
    var x, x1, x2;
    var d=Math.pow(b,2)-4*a*c;
    if (d<0) {
        return'No roots';
    }
    else {
        if (d === 0) { 
            d= -b/(2*a)
        }
        else {
            var x1 = (-b+Math.sqrt(d))/(2*a);
            var x1 = (-b-Math.sqrt(d))/(2*a);
            return'Two roots x1:' + x1 +' x2: ' + x2 +';
        }
    }