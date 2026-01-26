

// Programmatically assign odd numbers in between 81 to 41 in to an array and read elements

let arr =[]
let h=""
for(let i=81;i>=41;i--){

    if(i%2==1){
        arr.push(i)
    }

}

for(let i=0;i<arr.length;i++){

    //console.log(arr[i]);

    h += arr[i] + " "
    
}

console.log(h);