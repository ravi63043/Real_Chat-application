//Examle 1
/*[a,b, ...ravi]=[9,10,13,14,15,17];
console.log(a);
console.log(b);
console.log(ravi);*/
//Example2
function multiply(a,b,c)
{
    return (a*b*c);
}
const num=[1,2,3];
result=multiply(...num);
console.log(result);