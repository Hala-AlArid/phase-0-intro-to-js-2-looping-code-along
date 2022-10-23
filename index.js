// Code your solutions in this file
function writeCards(arr, string){
    const thanksArr = [];
    for(let i = 0; i < arr.length; i++){
        thanksArr.push("Thank you, "+ arr[i] + ", for the wonderful "+ string + " gift!")
    }
    return thanksArr;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(n){

var countdown = n;
while (countdown >= 0){
    console.log(countdown);
    countdown--;
}
}

countDown(10);

