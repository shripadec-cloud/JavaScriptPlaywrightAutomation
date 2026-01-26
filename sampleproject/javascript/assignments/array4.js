

//Programmatically assign the cube of numbers from 10 to 1 and read elements

let arr=[]
for(i=10;i>=1;i--){

    res = i*i*i

    //console.log(res);
    arr.push(res)
}

for(i=0;i<arr.length;i++){

    console.log(arr[i]);
    
}