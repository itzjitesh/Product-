const arr = [1,2,3,4,5,6,7,8,9,10];

const n = arr.length;
const k = 10;
const A = [];

function arrange(){
    for (let i = k; i<=n; i++){
        if (i<n){
        A.push(arr[i]);
        }
        if (i >= arr.length -1){
            for (j=0; j<k; j++){
                A.push(arr[j]);
            }
        }
    }
    return A;
}

console.log(arrange());
