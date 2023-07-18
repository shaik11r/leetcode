var arr=[4,5,8,9,10,17,17,20,24,30];
var n=arr.length;
let sum=-1
console.log(solve(arr,n-1,n));
function solve(arr,i,n){
    if(i==0){
        return n*arr[0];
    }
    let notCut=solve(arr,i-1,n);
    let cut=-Infinity;
    let rod_length=i+1;
    if(rod_length<=n){
        cut=arr[i]+solve(arr,i,n-rod_length);
    }
      return Math.max(notCut,cut);
}