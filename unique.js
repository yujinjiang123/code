const arr=[1,2,1,2,NaN,{age:1},NaN,{age:2},{age:1}];

function unique(arr){
    var obj={};
    return arr.filter((e,i,arr)=>obj.hasOwnProperty(typeof e+JSON.stringify(e))?false:(obj[typeof e + JSON.stringify(e)] = true))
}


var unique2 = (a) => [...new Set(a)]








