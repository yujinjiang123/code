function headSort(arr){
    let i,j;
    for(i=Math.ceil(arr.length/2);i>0;i--){
        adjustdown(arr,i);
    }
}

function adjustdown(arr,k){
    let temp=arr[k];
    for(let i=2*k,len=arr.length;i<len;i*=2){
        if(i<len&&arr[i]<arr[i+1]) i++;
        if(temp>=arr[i]) break;
        else{
            [arr[k],arr[i]]=[arr[i],arr[k]];
            k=i;
        }
    }
}