const coeffa = parseFloat(prompt('Enter a'));
const coeffb = parseFloat(prompt('Enter b'));
const coeffc = parseFloat(prompt('Enter c'));

function solveQuadEq(coeffa,coeffb,coeffc){
    const descriminant = calcDescriminant(coeffa,coeffb,coeffc);
    if (descriminant>0){
        const resolve1 = (-coeffb + Math.sqrt(descriminant))/(2*coeffa);
        const resolve2 = (-coeffb - Math.sqrt(descriminant))/(2*coeffa);
        return 'resolve1= '+resolve1 +'resolve2= '+resolve2;
            } else if (descriminant===0) {
        const resolve = -coeffb/(2*coeffa);
        return 'resolve= '+resolve;
    } else {
        return 'No solutions';
    }
}
function calcDescriminant(coeffa,coeffb,coeffc){
    const descriminant = Math.pow(coeffb,2)-(4*coeffa*coeffc);
    return descriminant;
}
let result = solveQuadEq(coeffa,coeffb,coeffc);
alert(result);